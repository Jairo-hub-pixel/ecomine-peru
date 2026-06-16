import { createContext,useContext,useState } from "react";


const AuthContext=createContext();



export function AuthProvider({children}){


const [user,setUser]=useState(

JSON.parse(
localStorage.getItem("usuario")
)

);



const login=(email,password)=>{


const usuarios =

JSON.parse(
localStorage.getItem("usuarios")
)
||
[];



const encontrado = usuarios.find(

u=>

u.email===email &&
u.password===password

);



if(
email==="admin@ecomine.com"
&&
password==="123456"
){


const admin={

nombre:"Administrador",

email

};


setUser(admin);

localStorage.setItem(
"usuario",
JSON.stringify(admin)
);


return true;

}



if(encontrado){


setUser(encontrado);


localStorage.setItem(
"usuario",
JSON.stringify(encontrado)
);


return true;


}



return false;


};






const register=(nombre,email,password)=>{


const usuarios =

JSON.parse(
localStorage.getItem("usuarios")
)
||
[];



usuarios.push({

nombre,

email,

password

});



localStorage.setItem(

"usuarios",

JSON.stringify(usuarios)

);



return true;


};





const logout=()=>{


setUser(null);


localStorage.removeItem(
"usuario"
);


};





return(

<AuthContext.Provider

value={{

user,

login,

register,

logout

}}

>


{children}


</AuthContext.Provider>


);


}





export function useAuth(){

return useContext(AuthContext);

}