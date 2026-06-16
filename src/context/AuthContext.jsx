import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuario) => {

      if (usuario) {

        // 🔥 GUARDAR / ACTUALIZAR USUARIO EN FIRESTORE
        await setDoc(doc(db, "usuarios", usuario.uid), {
          uid: usuario.uid,
          nombre: usuario.displayName,
          email: usuario.email,
          foto: usuario.photoURL || null,
          verificado: usuario.emailVerified,
          lastLogin: new Date()
        }, { merge: true });

        setUser({
          nombre: usuario.displayName,
          email: usuario.email,
          verificado: usuario.emailVerified
        });

      } else {
        setUser(null);
      }

    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {

    try {

      const credenciales =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      if (!credenciales.user.emailVerified) {

        alert("Debes verificar tu correo antes de iniciar sesión.");

        await signOut(auth);

        return false;
      }

      return true;

    } catch (error) {
      console.error(error);
      return false;
    }

  };

  const register = async (nombre, email, password) => {

    try {

      const credenciales =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(
        credenciales.user,
        { displayName: nombre }
      );

      await sendEmailVerification(credenciales.user);

      alert("Cuenta creada. Revisa tu correo para verificarla.");

      await signOut(auth);

      return true;

    } catch (error) {
      console.error(error);
      alert(error.message);
      return false;
    }

  };

  const loginGoogle = async () => {

    try {

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const usuario = result.user;

      // 🔥 GUARDAR USUARIO EN FIRESTORE
      await setDoc(doc(db, "usuarios", usuario.uid), {
        uid: usuario.uid,
        nombre: usuario.displayName,
        email: usuario.email,
        foto: usuario.photoURL || null,
        lastLogin: new Date()
      }, { merge: true });

      return true;

    } catch (error) {
      console.error(error);
      return false;
    }

  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      loginGoogle
    }}>
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() {
  return useContext(AuthContext);
}