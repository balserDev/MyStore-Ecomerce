import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Register(){
    const{RegisterUser, loginData} = useContext(UserContext);

    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        repasword:""
    })

    function handleForm(input){
        const newData = {...data};
        newData[input.target.name] = input.target.value;
        setData(newData);
    }

    function submit(e){
        e.preventDefault();
        RegisterUser(data.username, data.password, data.email, data.repasword);
     
    }


    return <div>
        <Header></Header>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <h1 className="Logo-text" style={{textAlign:"center", padding:"0"}}>Welcome!!</h1>

            <form className="Form" onSubmit={(e)=> submit(e)}>

                <input onChange={(input) => handleForm(input)} className="InputField" type="text" placeholder="Name" name="username"></input>
                <input onChange={(input) => handleForm(input)} className="InputField" type="email" placeholder="Email" name="email"></input>
                <input onChange={(input) => handleForm(input)} className="InputField" type="password" placeholder="Password" name="password"></input>
                <input onChange={(input) => handleForm(input)} className="InputField" type="password" placeholder="Repeat Password" name="repasword"></input>
                <input className="Submit" type="submit" style={{backgroundColor:"green", width:"100px", height:"50px", borderRadius:"5px"}} placeholder="Register"></input>
                

            </form>

            {!loginData.succes ? <h1 className="Error">{loginData.error}</h1>: <Navigate to="/login"></Navigate>}
            
        </div>
        
    </div>
}

export default Register