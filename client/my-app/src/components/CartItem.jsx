import React from "react";
import { useContext } from "react";
import { ShoppingContex } from "../context/ShopingContext";

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

const minusButton = {
    height:"50px",
    width:"50px",
    color:"white",
    fontSize:"50px",
    backgroundColor:"green",
    textAlign:"center",
    borderRadius:"20px",
    border:"solid 3px black",
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
}


function CartItem(props){

    const {RemovefromCart} = useContext(ShoppingContex)

    return<div style={containerStyle} >
        <div style={{display:'flex', flexFlow:"row", gap:"50px", paddingLeft:"20px", alignItems:"center",  border:"solid 5px black", borderRadius:"10px", width:"500px",}}>
            <div style={textStyleAlt}>{"x " + props.amount}</div>
            <img style={{width:"100px", height:"100px"}} src={props.img}></img>
            <div style={textStyle}>{props.name}</div>
           
        </div>
        <button style={minusButton} onClick={()=>RemovefromCart(props.id, props.price)}><div>-</div></button>
        
    </div>
}

export default CartItem