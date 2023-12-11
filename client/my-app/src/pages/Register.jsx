import React from "react";
import Header from "../components/Header";

function Register(){
    return <div>
        <Header></Header>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <h1 className="Logo-text" style={{textAlign:"center", padding:"0"}}>Welcome!!</h1>
            <form className="Form">
                <input className="InputField" type="text" placeholder="Name"></input>
                <input className="InputField" type="email" placeholder="Email"></input>
                <input className="InputField" type="password" placeholder="Password"></input>
                <input className="InputField" type="password" placeholder="Repeat Password"></input>
                <input className="Submit" onSubmit={""} style={{backgroundColor:"green", width:"100px", height:"50px", borderRadius:"5px"}} placeholder="Register"></input>
            </form>
        </div>
        
    </div>
}

export default Register