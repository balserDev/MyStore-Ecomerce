import React from "react";
import Header from "../components/Header"

function Fail(){
    return<div>
        <Header></Header>
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", minHeight:"80vh", flexDirection:'column'}}>
            <h1 style={{fontFamily:'monospace', color:"red", fontSize:"200px"}}>Ups....</h1>
            <h1 style={{fontFamily:'monospace', color:"red"}}>Seams like the payment didn't went through</h1>
        </div>
        
    </div>  
}
export default Fail