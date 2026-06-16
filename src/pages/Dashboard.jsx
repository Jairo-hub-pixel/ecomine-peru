import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "./Dashboard.css";


export default function Dashboard(){


const datos = [

{
mes:"Ene",
agua:80,
aire:75
},

{
mes:"Feb",
agua:70,
aire:82
},

{
mes:"Mar",
agua:85,
aire:88
},

{
mes:"Abr",
agua:60,
aire:70
},

{
mes:"May",
agua:90,
aire:85
}

];



return(


<div className="dashboard">


<h1>
Dashboard Ambiental
</h1>


<p className="subtitulo">
Monitoreo general EcoMine Perú
</p>





{/* TARJETAS */}


<div className="cards">



<div className="card">

<h3>
🌎 Zonas monitoreadas
</h3>

<h2>
24
</h2>

<span>
Activas
</span>

</div>




<div className="card">

<h3>
🚨 Alertas críticas
</h3>

<h2 className="rojo">
8
</h2>

<span>
Pendientes
</span>

</div>





<div className="card">

<h3>
🌳 Áreas protegidas
</h3>

<h2>
1,250 ha
</h2>

<span>
Conservadas
</span>

</div>





<div className="card">

<h3>
💧 Calidad ambiental
</h3>

<h2 className="verde">
85%
</h2>

<span>
Estado bueno
</span>

</div>



</div>









<div className="grid">



{/* GRAFICO */}


<div className="panel">


<h2>
📊 Gráfico ambiental
</h2>



<ResponsiveContainer width="100%" height={300}>


<LineChart data={datos}>


<XAxis dataKey="mes"/>

<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="agua"

strokeWidth={3}

/>


<Line

type="monotone"

dataKey="aire"

strokeWidth={3}

/>



</LineChart>



</ResponsiveContainer>



</div>









{/* ALERTAS */}


<div className="panel">


<h2>
🚨 Alertas críticas
</h2>



<div className="alert critica">

Minería ilegal detectada

<p>
Madre de Dios
</p>

</div>




<div className="alert warning">

Nivel de mercurio elevado

<p>
Loreto
</p>

</div>





<div className="alert ok">

Zona controlada

<p>
Ucayali
</p>

</div>




</div>



</div>










{/* ACTIVIDAD */}


<div className="panel actividad">


<h2>
📋 Actividad reciente
</h2>



<p>
🟢 Nuevo monitoreo registrado
<span>
Hace 5 minutos
</span>
</p>



<p>
📄 Reporte generado
<span>
Hace 20 minutos
</span>
</p>



<p>
👤 Administrador inició sesión
<span>
Hace 1 hora
</span>
</p>



</div>




</div>


);


}