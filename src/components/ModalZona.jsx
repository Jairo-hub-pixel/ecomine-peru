import { useState } from "react";
import "./ModalZona.css";

export default function ModalZona({ cerrar, agregarZona }) {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [estado, setEstado] = useState("Activo");

  const guardar = () => {
    if (!nombre || !ubicacion) return;

    agregarZona({
      id: Date.now(),
      nombre,
      ubicacion,
      estado,
    });

    cerrar();
  };

  return (
    <div className="modal-fondo">
      <div className="modal-zona">

        <h2>Nueva Zona</h2>

        <label>Nombre de zona</label>
        <input
          type="text"
          placeholder="Ej: Zona Norte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Ubicación</label>
        <input
          type="text"
          placeholder="Ej: Cajamarca"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />

        <label>Estado</label>
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option>Activo</option>
          <option>Inactivo</option>
        </select>


        <div className="modal-botones">
          <button 
            className="cancelar"
            onClick={cerrar}
          >
            Cancelar
          </button>

          <button 
            className="guardar"
            onClick={guardar}
          >
            Guardar Zona
          </button>
        </div>

      </div>
    </div>
  );
}