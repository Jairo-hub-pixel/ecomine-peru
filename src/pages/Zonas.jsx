import { useState } from "react";
import ModalZona from "../components/ModalZona";
import "./Zonas.css";

export default function Zonas() {

  const [mostrarModal, setMostrarModal] = useState(false);

  const [buscar, setBuscar] = useState("");

  const [zonas, setZonas] = useState([
    {
      id:1,
      nombre:"Zona Principal",
      ubicacion:"Perú",
      estado:"Activo"
    }
  ]);


  const agregarZona = (nuevaZona) => {

    setZonas([
      ...zonas,
      nuevaZona
    ]);

  };


  const zonasFiltradas = zonas.filter((zona)=>

    zona.nombre
    .toLowerCase()
    .includes(buscar.toLowerCase())

  );


  return (

    <div className="dashboard">


      <div className="zona-header">

        <div>

          <h1>Zonas</h1>

          <p>
            Gestión de zonas mineras registradas
          </p>

        </div>


        <button
          onClick={()=>setMostrarModal(true)}
        >
          + Nueva Zona
        </button>


      </div>



      <div className="zona-info">

        <div className="info-card">

          <h2>
            {zonas.length}
          </h2>

          <p>
            Total de zonas
          </p>

        </div>

      </div>




      <input

        className="buscador"

        placeholder="Buscar zona..."

        value={buscar}

        onChange={(e)=>setBuscar(e.target.value)}

      />





      <div className="zonas-grid">


        {zonasFiltradas.map((zona)=>(


          <div 
            className="zona-card"
            key={zona.id}
          >


            <h3>
              {zona.nombre}
            </h3>


            <p>
              📍 {zona.ubicacion}
            </p>



            <span 
              className={
                zona.estado==="Activo"
                ?
                "estado activo"
                :
                "estado inactivo"
              }
            >

              {zona.estado}

            </span>



          </div>


        ))}


      </div>





      {mostrarModal &&

        <ModalZona

          cerrar={()=>setMostrarModal(false)}

          agregarZona={agregarZona}

        />

      }



    </div>

  );

}