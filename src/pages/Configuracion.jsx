import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Configuracion() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/login");
  };

  const eliminarCuenta = () => {
    if (!window.confirm("¿Estás seguro de eliminar tu cuenta?")) {
      return;
    }

    // No permitir borrar la cuenta admin
    if (user?.email === "admin@ecomine.com") {
      alert("La cuenta administrador no puede eliminarse.");
      return;
    }

    const usuarios =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuariosActualizados = usuarios.filter(
      (u) => u.email !== user.email
    );

    localStorage.setItem(
      "usuarios",
      JSON.stringify(usuariosActualizados)
    );

    logout();

    alert("Cuenta eliminada correctamente");

    navigate("/login");
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Configuración
      </h1>

      <p className="text-gray-500 mb-8">
        Gestiona tu cuenta y preferencias
      </p>

      {/* Perfil */}
      <div className="bg-white rounded-2xl p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Perfil
        </h2>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
            {user?.nombre?.charAt(0).toUpperCase() || "U"}
          </div>

          <div>
            <h3 className="font-bold text-lg">
              {user?.nombre}
            </h3>

            <p className="text-gray-500">
              {user?.email}
            </p>

            <span className="text-sm text-gray-400">
              {user?.email === "admin@ecomine.com"
                ? "Administrador"
                : "Usuario"}
            </span>
          </div>
        </div>
      </div>

      {/* Sesión */}
      <div className="bg-white rounded-2xl p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Sesión
        </h2>

        <button
          onClick={cerrarSesion}
          className="w-full border border-blue-500 text-blue-500 py-3 rounded-xl hover:bg-blue-50"
        >
          🚪 Cerrar sesión
        </button>
      </div>

      {/* Zona de peligro */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-red-700 mb-4">
          ⚠ Zona de peligro
        </h2>

        <div className="flex justify-between items-center bg-white p-4 rounded-xl">
          <div>
            <h3 className="font-semibold">
              Eliminar cuenta
            </h3>

            <p className="text-gray-500 text-sm">
              Esta acción eliminará permanentemente tu cuenta y todos los datos asociados.
            </p>
          </div>

          <button
            onClick={eliminarCuenta}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            Eliminar mi cuenta
          </button>
        </div>
      </div>
    </div>
  );
}