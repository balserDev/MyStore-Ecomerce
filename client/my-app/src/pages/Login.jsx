import React from "react";
import Header from "../components/Header";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function Login (){

    const {LoginUser, userData} = useContext(UserContext);

    const [data, setData] = useState({
        email:"",
        password:""
    })

    function handleForm(input){
        const newData = {...data};
        newData[input.target.name] = input.target.value;
        setData(newData);
    }
    
    function submit(e){
        e.preventDefault();
        LoginUser(data.email, data.password);
        
        
    }
    
    
    return <div>
        
    <Header></Header>

    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <h1 className="Logo-text" style={{textAlign:"center", padding:"0"}}>Welcome!!</h1>

        <form className="Form" onSubmit={(e)=> submit(e)}>

            <input onChange={(input) => handleForm(input)} className="InputField" type="email" placeholder="Email" name="email"></input>
            <input onChange={(input) => handleForm(input)} className="InputField" type="password" placeholder="Password" name="password"></input>
            <input className="Submit" type="submit" style={{backgroundColor:"green", width:"100px", height:"50px", borderRadius:"5px"}} placeholder="Login"></input>
            

        </form>

        {!userData.loged ? <h1 className="Error">{userData.error}</h1>: <Navigate to="/"></Navigate>}
        
    </div>
    
</div>
}

export default Login