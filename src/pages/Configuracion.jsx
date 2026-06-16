export default function Configuracion() {
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
            J
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Jairo Joel Escurra Arias
            </h3>

            <p className="text-gray-500">
              ejairojoel@gmail.com
            </p>

            <span className="text-sm text-gray-400">
              Administrador
            </span>
          </div>
        </div>
      </div>

      {/* Sesión */}
      <div className="bg-white rounded-2xl p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Sesión
        </h2>

        <button className="w-full border border-blue-500 text-blue-500 py-3 rounded-xl hover:bg-blue-50">
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

          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
            Eliminar mi cuenta
          </button>
        </div>
      </div>
    </div>
  );
}