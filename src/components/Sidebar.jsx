import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Sidebar() {


  const { user, logout } = useAuth();

  const navigate = useNavigate();



  const salir = () => {

    logout();

    navigate("/login");

  };



  return (


    <aside className="w-72 bg-emerald-900 text-white p-6 min-h-screen flex flex-col">



      <div>



        <h1 className="text-3xl font-bold mb-2">

          🌳 EcoMine Perú

        </h1>



        <p className="text-emerald-200 text-sm mb-8">

          Sistema de Monitoreo Ambiental

        </p>





        <div className="bg-emerald-800 p-4 rounded-xl mb-8">


          <p className="text-xs text-emerald-200">

            Usuario conectado

          </p>


          <p className="font-semibold">

            {user?.nombre}

          </p>


          <p className="text-xs">

            {user?.email}

          </p>


        </div>





        <nav className="space-y-2">



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



      </div>





      <div className="mt-auto">



        <button

          onClick={salir}

          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-xl font-semibold"

        >

          🚪 Cerrar Sesión

        </button>





        <p className="text-center text-xs text-emerald-200 mt-4">

          EcoMine Perú v1.0

        </p>



      </div>



    </aside>


  );

}