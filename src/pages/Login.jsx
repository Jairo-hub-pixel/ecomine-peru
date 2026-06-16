import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";


export default function Login(){


const [modo,setModo]=useState("login");


const [nombre,setNombre]=useState("");

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");


const {login,register}=useAuth();

const navigate=useNavigate();





const enviar=(e)=>{


e.preventDefault();



if(modo==="login"){


const ok = login(email,password);



if(ok){

navigate("/");

}

else{

alert("Datos incorrectos");

}



}else{


const ok = register(
nombre,
email,
password
);



if(ok){

alert("Cuenta creada");

setModo("login");

}



}


};





return(


<div className="login-container">


<div className="login-card">



<h1>
🌳 EcoMine Perú
</h1>



<p>
Sistema ambiental
</p>




<form onSubmit={enviar}>


{modo==="registro" && (

<input

placeholder="Nombre"

value={nombre}

onChange={
e=>setNombre(e.target.value)
}

/>

)}



<input

placeholder="Correo"

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>




<input

type="password"

placeholder="Contraseña"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>




<button>

{
modo==="login"
?
"Iniciar sesión"
:
"Crear cuenta"
}

</button>



</form>




<button

className="cambiar"

onClick={()=>

setModo(
modo==="login"
?
"registro"
:
"login"
)

}

>


{
modo==="login"
?
"Crear cuenta nueva"
:
"Ya tengo cuenta"
}


</button>



</div>


</div>


);

}