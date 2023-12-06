import React from "react";

const containerStyle = {
    display:"flex",
    flexFlow:"row",
    gap:"20px",
    alignItems:"center"
    
   
}
const textStyle = {
    fontSize:"40px",
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    color:"black",
    justifyContent:"center",

    
    
}
const textStyleAlt = {
    fontSize:"50px",
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    color:"black",
    justifyContent:"center",
    whiteSpace:"nowrap"
    
    
}


function CartItem(props){
    return<div style={containerStyle}>
        <div style={{display:'flex', flexFlow:"row", gap:"50px", paddingLeft:"20px", alignItems:"center",  border:"solid 5px black", borderRadius:"10px", width:"500px",}}>
            <div style={textStyleAlt}>{"x " + props.amount}</div>
            <img style={{width:"100px", height:"100px"}} src={props.img}></img>
            <div style={textStyle}>{props.name}</div>
           
        </div>
        <button style={{height:"50px", width:"50px", color:"white", fontSize:"50px", backgroundColor:"green", textAlign:"center", borderRadius:"20px", border:"solid 3px black"}}>-</button>
        
    </div>
}

export default CartItem