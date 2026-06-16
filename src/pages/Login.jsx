import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";


export default function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const {login}=useAuth();

const navigate=useNavigate();



const entrar=(e)=>{


e.preventDefault();



const valido =
login(email,password);



if(valido){

navigate("/");

}

else{

alert("Usuario o contraseña incorrectos");

}


};



return(


<div className="login-container">


<div className="login-card">


<h1>
EcoMine Perú
</h1>


<p>
Sistema de monitoreo ambiental
</p>



<form onSubmit={entrar}>


<label>
Correo
</label>


<input

type="email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>



<label>
Contraseña
</label>



<input

type="password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



<button>

Ingresar

</button>


</form>


</div>


</div>


);


}