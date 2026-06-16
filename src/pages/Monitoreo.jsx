import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./Monitoreo.css";

export default function Monitoreo() {

  const [datos, setDatos] = useState([
    {
      id: 1,
      zona: "Zona desconocida",
      fecha: "30/04/2026",
      agua: "20%",
      aire: "35%",
      mercurio: "1.05 ppm",
      deforestacion: "148 ha",
      temperatura: "27.8°C",
    },
    {
      id: 2,
      zona: "Cuenca del Santiago",
      fecha: "30/04/2026",
      agua: "75%",
      aire: "80%",
      mercurio: "0.08 ppm",
      deforestacion: "4.5 ha",
      temperatura: "24.5°C",
    },
    {
      id: 3,
      zona: "Zona amazónica",
      fecha: "30/04/2026",
      agua: "60%",
      aire: "70%",
      mercurio: "0.15 ppm",
      deforestacion: "12 ha",
      temperatura: "26.5°C",
    },
  ]);


  const [paginaActual, setPaginaActual] = useState(1);

  const registrosPorPagina = 5;


  const ultimoRegistro =
    paginaActual * registrosPorPagina;


  const primerRegistro =
    ultimoRegistro - registrosPorPagina;


  const datosActuales =
    datos.slice(
      primerRegistro,
      ultimoRegistro
    );


  const totalPaginas =
    Math.ceil(
      datos.length / registrosPorPagina
    );



  const eliminar = (id)=>{

    setDatos(
      datos.filter(
        (d)=>d.id !== id
      )
    );

  };



  const nuevoRegistro = ()=>{

    const zona = prompt("Ingrese la zona");


    if(!zona) return;


    setDatos([

      {
        id: Date.now(),
        zona,
        fecha:new Date().toLocaleDateString(),
        agua:"70%",
        aire:"75%",
        mercurio:"0.05 ppm",
        deforestacion:"5 ha",
        temperatura:"25°C"
      },

      ...datos

    ]);

  };



  const exportarCSV = ()=>{

    const encabezado =
    "Zona,Fecha,Agua,Aire,Mercurio,Deforestacion,Temperatura\n";


    const filas =
    datos.map((d)=>
    `${d.zona},${d.fecha},${d.agua},${d.aire},${d.mercurio},${d.deforestacion},${d.temperatura}`
    )
    .join("\n");


    const blob =
    new Blob(
      [encabezado + filas],
      {type:"text/csv"}
    );


    const url =
    URL.createObjectURL(blob);


    const a =
    document.createElement("a");


    a.href=url;

    a.download="monitoreo.csv";

    a.click();

  };



  return (

    <div className="monitoreo">


      <div className="monitoreo-header">

        <div>

          <h1>
            Monitoreo Ambiental
          </h1>

          <p>
            Registro de indicadores ambientales por zona
          </p>

        </div>


        <div className="botones">


          <button
            className="btn-exportar"
            onClick={exportarCSV}
          >
            Exportar CSV
          </button>



          <button
            className="btn-nuevo"
            onClick={nuevoRegistro}
          >
            + Nuevo Registro
          </button>


        </div>


      </div>



      <div className="indicadores">


        <div className="indicador-card">
          <h2>💧 Agua</h2>
          <p>{datos[0].agua}</p>
          <span>Calidad registrada</span>
        </div>


        <div className="indicador-card">
          <h2>🌬️ Aire</h2>
          <p>{datos[0].aire}</p>
          <span>Nivel ambiental</span>
        </div>


        <div className="indicador-card">
          <h2>☣️ Mercurio</h2>
          <p>{datos[0].mercurio}</p>
          <span>Contaminación</span>
        </div>


        <div className="indicador-card">
          <h2>🌡️ Temperatura</h2>
          <p>{datos[0].temperatura}</p>
          <span>Registro actual</span>
        </div>


      </div>





      <div className="tabla-container">


        <table>


          <thead>

            <tr>

              <th>Zona</th>
              <th>Fecha</th>
              <th>Agua</th>
              <th>Aire</th>
              <th>Mercurio</th>
              <th>Deforest.</th>
              <th>Temp.</th>
              <th>Acción</th>

            </tr>

          </thead>



          <tbody>


          {datosActuales.map((d)=>(


            <tr key={d.id}>


              <td>{d.zona}</td>

              <td>{d.fecha}</td>

              <td>{d.agua}</td>

              <td>{d.aire}</td>

              <td>{d.mercurio}</td>

              <td>{d.deforestacion}</td>

              <td>{d.temperatura}</td>


              <td>

                <FaTrash
                  onClick={()=>eliminar(d.id)}
                  className="delete"
                />

              </td>


            </tr>


          ))}


          </tbody>


        </table>





        <div className="paginacion">


          <button
            onClick={()=>
              setPaginaActual(
                Math.max(paginaActual-1,1)
              )
            }
          >
            Anterior
          </button>



          {[...Array(totalPaginas)].map(
            (_,i)=>(

              <button
                key={i}
                onClick={()=>
                  setPaginaActual(i+1)
                }
                className={
                  paginaActual===i+1
                  ?
                  "pagina-activa"
                  :
                  ""
                }
              >
                {i+1}
              </button>

            )
          )}



          <button
            onClick={()=>
              setPaginaActual(
                Math.min(
                  paginaActual+1,
                  totalPaginas
                )
              )
            }
          >
            Siguiente
          </button>


        </div>


      </div>


    </div>

  );

}