import React from "react";
import Header from "../components/Header"

function Succses(){
    return<div>
        <Header></Header>
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", minHeight:"80vh", flexDirection:'column'}}>
            <h1 style={{fontFamily:'monospace', color:"green", fontSize:"200px"}}>Thank you!</h1>
            <h1 style={{fontFamily:'monospace', color:"green"}}> Succsesfull Payment, you are all set!</h1>
        </div>
        
    </div>  
}
export default Succses