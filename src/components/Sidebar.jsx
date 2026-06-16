import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-emerald-900 text-white p-6 min-h-screen">

      <h1 className="text-3xl font-bold mb-10">
        🌳 EcoMine Perú
      </h1>

      <nav className="space-y-3">

        <Link
          to="/"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/zonas"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          🌎 Zonas
        </Link>

        <Link
          to="/monitoreo"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          📷 Monitoreo
        </Link>

        <Link
          to="/mapa"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          🗺️ Mapa
        </Link>

        <Link
          to="/estadisticas"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          📈 Estadísticas
        </Link>

        <Link
          to="/reportes"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          📋 Reportes
        </Link>

        <Link
          to="/administracion"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          ⚙️ Administración
        </Link>

        <Link
          to="/configuracion"
          className="block p-3 rounded-xl hover:bg-emerald-700 transition"
        >
          🔧 Configuración
        </Link>

      </nav>
    </aside>
  );
}