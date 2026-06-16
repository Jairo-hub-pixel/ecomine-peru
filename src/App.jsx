import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./components/Layout";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Zonas from "./pages/Zonas";
import Monitoreo from "./pages/Monitoreo";
import Reportes from "./pages/Reportes";
import Administracion from "./pages/Administracion";

import Configuracion from "./pages/Configuracion";
import Mapa from "./pages/Mapa";
import Estadisticas from "./pages/Estadisticas";



export default function App(){


  return (


    <AuthProvider>


      <BrowserRouter>


        <Routes>



          <Route

            path="/login"

            element={<Login/>}

          />





          <Route

            path="/"

            element={

              <ProtectedRoute>

                <Layout>

                  <Dashboard/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/zonas"

            element={

              <ProtectedRoute>

                <Layout>

                  <Zonas/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/monitoreo"

            element={

              <ProtectedRoute>

                <Layout>

                  <Monitoreo/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/reportes"

            element={

              <ProtectedRoute>

                <Layout>

                  <Reportes/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/administracion"

            element={

              <ProtectedRoute>

                <Layout>

                  <Administracion/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/configuracion"

            element={

              <ProtectedRoute>

                <Layout>

                  <Configuracion/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/mapa"

            element={

              <ProtectedRoute>

                <Layout>

                  <Mapa/>

                </Layout>

              </ProtectedRoute>

            }

          />





          <Route

            path="/estadisticas"

            element={

              <ProtectedRoute>

                <Layout>

                  <Estadisticas/>

                </Layout>

              </ProtectedRoute>

            }

          />





        </Routes>


      </BrowserRouter>


    </AuthProvider>


  );

}