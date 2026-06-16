import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "./Administracion.css";

export default function Administracion() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // 🔥 Escucha en tiempo real la colección "usuarios"
    const unsub = onSnapshot(collection(db, "usuarios"), (snapshot) => {
      const listaUsuarios = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        nombre: doc.data().nombre,
        correo: doc.data().email,
        rol: doc.data().rol || "Usuario",
        estado: doc.data().estado || "Activo"
      }));

      // 👑 Usuario admin fijo (opcional)
      const admin = {
        id: "admin",
        nombre: "Administrador",
        correo: "admin@ecomine.com",
        rol: "Administrador",
        estado: "Activo"
      };

      setUsuarios([admin, ...listaUsuarios]);
    });

    return () => unsub();
  }, []);

  const eliminarUsuario = (id) => {
    if (id === "admin") {
      alert("No se puede eliminar el administrador");
      return;
    }

    alert("Para eliminar usuarios debes usar deleteDoc de Firestore (te lo puedo agregar si quieres)");
  };

  return (
    <div className="administracion">

      <div className="admin-header">
        <div>
          <h1>Administración</h1>
          <p>Gestión de usuarios y permisos del sistema</p>
        </div>
      </div>

      {/* 📊 CARDS */}
      <div className="admin-cards">

        <div className="admin-card">
          <h3>Usuarios Totales</h3>
          <strong>{usuarios.length}</strong>
        </div>

        <div className="admin-card">
          <h3>Administradores</h3>
          <strong>
            {usuarios.filter(u => u.rol === "Administrador").length}
          </strong>
        </div>

        <div className="admin-card">
          <h3>Usuarios Activos</h3>
          <strong>
            {usuarios.filter(u => u.estado === "Activo").length}
          </strong>
        </div>

      </div>

      {/* 📋 TABLA */}
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
            {usuarios.map((u) => (
              <tr key={u.id}>

                <td>{u.id}</td>
                <td>{u.nombre}</td>
                <td>{u.correo}</td>
                <td>{u.rol}</td>

                <td>
                  <span className={u.estado === "Activo" ? "activo" : "inactivo"}>
                    {u.estado}
                  </span>
                </td>

                <td>
                  {u.id !== "admin" && (
                    <button
                      className="eliminar"
                      onClick={() => eliminarUsuario(u.id)}
                    >
                      Eliminar
                    </button>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}