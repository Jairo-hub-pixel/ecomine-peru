import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Zonas from "./pages/Zonas";
import Monitoreo from "./pages/Monitoreo";
import Mapa from "./pages/Mapa";
import Estadisticas from "./pages/Estadisticas";
import Reportes from "./pages/Reportes";
import Administracion from "./pages/Administracion";
import Configuracion from "./pages/Configuracion";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="flex-1 p-8">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/zonas"
              element={<Zonas />}
            />

            <Route
              path="/monitoreo"
              element={<Monitoreo />}
            />

            <Route
              path="/mapa"
              element={<Mapa />}
            />

            <Route
              path="/estadisticas"
              element={<Estadisticas />}
            />

            <Route
              path="/reportes"
              element={<Reportes />}
            />

            <Route
              path="/administracion"
              element={<Administracion />}
            />

            <Route
              path="/configuracion"
              element={<Configuracion />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;