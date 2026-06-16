import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {

  const [modo, setModo] = useState("login");

  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { login, register, loginGoogle } = useAuth();

  const navigate = useNavigate();

  const ingresarGoogle = async () => {

    const ok = await loginGoogle();

    if (ok) {

      navigate("/");

    }

  };

  const enviar = async (e) => {

    e.preventDefault();

    if (modo === "login") {

      const ok = await login(
        email,
        password
      );

      if (ok) {

        navigate("/");

      } else {

        alert(
          "Correo o contraseña incorrectos, o correo no verificado."
        );

      }

    } else {

      const ok = await register(
        nombre,
        email,
        password
      );

      if (ok) {

        alert(
          "Cuenta creada correctamente. Revisa tu Gmail para verificar tu cuenta."
        );

        setModo("login");

        setNombre("");

        setEmail("");

        setPassword("");

      }

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>
          🌳 EcoMine Perú
        </h1>

        <p>
          Sistema ambiental
        </p>

        <form onSubmit={enviar}>

          {
            modo === "registro" && (

              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

            )
          }

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">

            {
              modo === "login"
                ? "Iniciar sesión"
                : "Crear cuenta"
            }

          </button>

        </form>

        <button
          type="button"
          className="google-btn"
          onClick={ingresarGoogle}
        >
          🔵 Iniciar sesión con Google
        </button>

        <button

          className="cambiar"

          onClick={() =>
            setModo(
              modo === "login"
                ? "registro"
                : "login"
            )
          }

        >

          {
            modo === "login"
              ? "Crear cuenta nueva"
              : "Ya tengo cuenta"
          }

        </button>

      </div>

    </div>

  );

}