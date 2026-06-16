import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export function AuthProvider({ children }) {


  const [user, setUser] = useState(() => {

    const guardado =
      localStorage.getItem("usuario");

    return guardado
      ? JSON.parse(guardado)
      : null;

  });



  const login = (email, password) => {


    if (
      email === "admin@ecomine.com" &&
      password === "123456"
    ) {


      const usuario = {

        nombre: "Administrador",

        email

      };


      setUser(usuario);


      localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
      );


      return true;

    }


    return false;

  };



  const logout = () => {


    setUser(null);


    localStorage.removeItem(
      "usuario"
    );


  };



  return (

    <AuthContext.Provider

      value={{
        user,
        login,
        logout
      }}

    >

      {children}

    </AuthContext.Provider>

  );

}



export function useAuth(){

  return useContext(AuthContext);

}