import { useState, useEffect } from "react";
import "./Administracion.css";

export default function Administracion() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const admin = {
      id: 1,
      nombre: "Administrador",
      correo: "admin@ecomine.com",
      rol: "Administrador",
      estado: "Activo"
    };

    const listaUsuarios = usuariosRegistrados.map((u, index) => ({
      id: index + 2,
      nombre: u.nombre,
      correo: u.email,
      rol: "Usuario",
      estado: "Activo"
    }));

    setUsuarios([admin, ...listaUsuarios]);

  }, []);

  const eliminarUsuario = (id) => {

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) return;

    if (usuario.correo === "admin@ecomine.com") {
      alert("No se puede eliminar el administrador");
      return;
    }

    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const actualizados = usuariosRegistrados.filter(
      u => u.email !== usuario.correo
    );

    localStorage.setItem(
      "usuarios",
      JSON.stringify(actualizados)
    );

    setUsuarios(
      usuarios.filter(u => u.id !== id)
    );
  };

  return (

    <div className="administracion">

      <div className="admin-header">

        <div>
          <h1>Administración</h1>
          <p>Gestión de usuarios y permisos del sistema</p>
        </div>

      </div>

      <div className="admin-cards">

        <div className="admin-card">
          <h3>Usuarios Totales</h3>
          <strong>{usuarios.length}</strong>
        </div>

        <div className="admin-card">
          <h3>Administradores</h3>
          <strong>
            {
              usuarios.filter(
                u => u.rol === "Administrador"
              ).length
            }
          </strong>
        </div>

        <div className="admin-card">
          <h3>Usuarios Activos</h3>
          <strong>
            {
              usuarios.filter(
                u => u.estado === "Activo"
              ).length
            }
          </strong>
        </div>

      </div>

      <div className="tabla-admin">

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>

          </thead>

          <tbody>

            {
              usuarios.map(u => (

                <tr key={u.id}>

                  <td>{u.id}</td>

                  <td>{u.nombre}</td>

                  <td>{u.correo}</td>

                  <td>{u.rol}</td>

                  <td>
                    <span
                      className={
                        u.estado === "Activo"
                          ? "activo"
                          : "inactivo"
                      }
                    >
                      {u.estado}
                    </span>
                  </td>

                  <td>

                    {
                      u.correo !== "admin@ecomine.com" && (
                        <button
                          className="eliminar"
                          onClick={() => eliminarUsuario(u.id)}
                        >
                          Eliminar
                        </button>
                      )
                    }

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>

  );
}