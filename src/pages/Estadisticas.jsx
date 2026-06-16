import "./Estadisticas.css";


export default function Estadisticas(){


return(


<div className="estadisticas">


<h1>
📈 Estadísticas Ambientales
</h1>


<p>
Análisis de datos de EcoMine Perú
</p>





<div className="estadisticas-grid">



<div className="stat-box">

<h3>
Monitoreos realizados
</h3>

<strong>
356
</strong>

</div>





<div className="stat-box">

<h3>
Zonas críticas
</h3>

<strong className="rojo">
12
</strong>

</div>





<div className="stat-box">

<h3>
Hectáreas afectadas
</h3>

<strong>
850 ha
</strong>

</div>



</div>





<div className="grafico-box">


<h2>
Resumen mensual
</h2>


<div className="barra">

<span>
Agua
</span>

<div className="linea agua"></div>

</div>



<div className="barra">

<span>
Aire
</span>

<div className="linea aire"></div>

</div>




<div className="barra">

<span>
Bosques
</span>

<div className="linea bosque"></div>

</div>



</div>



</div>


);


}