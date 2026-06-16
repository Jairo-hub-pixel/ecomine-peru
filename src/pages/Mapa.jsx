import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "./Mapa.css";


export default function Mapa(){


const zonas=[

{
nombre:"Madre de Dios",
riesgo:"Crítico",
lat:-12.046,
lng:-77.042
},

{
nombre:"Loreto",
riesgo:"Moderado",
lat:-3.743,
lng:-73.253
},

{
nombre:"Ucayali",
riesgo:"Controlado",
lat:-8.379,
lng:-74.553
}

];



return(

<div className="mapa-page">


<div className="mapa-header">

<h1>
🗺️ Mapa Ambiental
</h1>


<p>
Monitoreo geográfico de zonas mineras
</p>

</div>




<div className="mapa-card">


<MapContainer

center={[-8.5,-75]}

zoom={5}

className="mapa-real"

>


<TileLayer

url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

/>



{
zonas.map((zona,index)=>(


<Marker

key={index}

position={[

zona.lat,

zona.lng

]}

>


<Popup>


<div>

<h3>

{zona.nombre}

</h3>


<p>

Estado:

<strong>

{" "}{zona.riesgo}

</strong>

</p>


</div>


</Popup>


</Marker>


))

}



</MapContainer>



</div>



</div>


)

}