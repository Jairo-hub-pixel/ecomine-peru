import { useState } from "react";
import "./Administracion.css";

export default function Administracion() {


  const [usuarios, setUsuarios] = useState([

    {
      id:1,
      nombre:"Administrador",
      correo:"admin@ecomine.com",
      rol:"Administrador",
      estado:"Activo"
    },

    {
      id:2,
      nombre:"Supervisor Ambiental",
      correo:"supervisor@ecomine.com",
      rol:"Supervisor",
      estado:"Activo"
    },

    {
      id:3,
      nombre:"Operador",
      correo:"operador@ecomine.com",
      rol:"Operador",
      estado:"Inactivo"
    }

  ]);



  const eliminarUsuario=(id)=>{

    setUsuarios(
      usuarios.filter(
        u=>u.id!==id
      )
    );

  };



  const nuevoUsuario=()=>{


    const nombre =
    prompt("Ingrese nombre del usuario");


    if(!nombre)return;



    setUsuarios([

      {

        id:Date.now(),

        nombre,

        correo:
        "usuario@ecomine.com",

        rol:"Operador",

        estado:"Activo"

      },

      ...usuarios

    ]);


  };





  return(


<div className="administracion">



<div className="admin-header">


<div>

<h1>
Administración
</h1>


<p>
Gestión de usuarios y permisos del sistema
</p>


</div>



<button
className="btn-usuario"
onClick={nuevoUsuario}
>
+ Nuevo Usuario
</button>


</div>





<div className="admin-cards">



<div className="admin-card">

<h3>
Usuarios Totales
</h3>

<strong>
{usuarios.length}
</strong>


</div>




<div className="admin-card">

<h3>
Administradores
</h3>

<strong>
{
usuarios.filter(
u=>u.rol==="Administrador"
).length
}
</strong>


</div>




<div className="admin-card">

<h3>
Usuarios Activos
</h3>

<strong>

{
usuarios.filter(
u=>u.estado==="Activo"
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
usuarios.map(u=>(


<tr key={u.id}>


<td>
{u.id}
</td>


<td>
{u.nombre}
</td>


<td>
{u.correo}
</td>



<td>
{u.rol}
</td>



<td>

<span
className={
u.estado==="Activo"
?
"activo"
:
"inactivo"
}
>

{u.estado}

</span>


</td>




<td>

<button

className="eliminar"

onClick={()=>eliminarUsuario(u.id)}

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