import { useState } from "react";
import "./Reportes.css";

export default function Reportes() {


  const [reportes, setReportes] = useState([

    {
      id:1,
      zona:"Madre de Dios",
      fecha:"15/06/2026",
      estado:"Crítico",
      hectareas:350
    },

    {
      id:2,
      zona:"Loreto",
      fecha:"12/06/2026",
      estado:"Moderado",
      hectareas:120
    },

    {
      id:3,
      zona:"Ucayali",
      fecha:"08/06/2026",
      estado:"Controlado",
      hectareas:45
    }

  ]);



  const eliminarReporte=(id)=>{

    setReportes(
      reportes.filter(
        r=>r.id!==id
      )
    );

  };



  const nuevoRegistro=()=>{


    const zona =
    prompt("Ingrese zona");


    if(!zona)return;



    setReportes([

      {

        id:Date.now(),

        zona,

        fecha:new Date()
        .toLocaleDateString(),

        estado:"Moderado",

        hectareas:50

      },

      ...reportes

    ]);


  };




  const exportarCSV=()=>{


    const texto =
    "Zona,Fecha,Estado,Hectareas\n" +

    reportes.map(r=>

    `${r.zona},${r.fecha},${r.estado},${r.hectareas}`

    ).join("\n");



    const blob =
    new Blob([texto],
    {
      type:"text/csv"
    });



    const url =
    URL.createObjectURL(blob);



    const link =
    document.createElement("a");

    link.href=url;

    link.download=
    "reportes-ecomine.csv";

    link.click();


  };



return(


<div className="reportes">



<div className="reporte-header">


<div>

<h1>
Reportes Ambientales
</h1>


<p>
Gestión de reportes de minería ilegal
</p>


</div>



<div className="acciones">


<button
className="btn-nuevo"
onClick={nuevoRegistro}
>
+ Nuevo Reporte
</button>


<button
className="btn-exportar"
onClick={exportarCSV}
>
Exportar CSV
</button>


</div>


</div>





<div className="estadisticas">



<div className="card">

<h3>
Reportes Totales
</h3>

<strong>
{reportes.length}
</strong>

</div>




<div className="card">

<h3>
Casos Críticos
</h3>

<strong className="rojo">

{
reportes.filter(
r=>r.estado==="Crítico"
).length
}

</strong>

</div>




<div className="card">

<h3>
Hectáreas Afectadas
</h3>

<strong>

{
reportes.reduce(
(t,r)=>
t+Number(r.hectareas),
0
)

}

</strong>

</div>



</div>





<div className="tabla-reportes">


<table>


<thead>

<tr>

<th>ID</th>

<th>Zona</th>

<th>Fecha</th>

<th>Estado</th>

<th>Hectáreas</th>

<th>Acción</th>


</tr>


</thead>




<tbody>


{
reportes.map(r=>(


<tr key={r.id}>


<td>
{r.id}
</td>


<td>
{r.zona}
</td>


<td>
{r.fecha}
</td>



<td>

<span
className={
r.estado==="Crítico"
?
"critico"
:
r.estado==="Moderado"
?
"moderado"
:
"controlado"
}
>

{r.estado}

</span>


</td>



<td>
{r.hectareas} ha
</td>



<td>


<button
className="eliminar"
onClick={()=>eliminarReporte(r.id)}
>

Eliminar

</button>


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