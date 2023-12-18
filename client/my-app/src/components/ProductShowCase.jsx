import React from "react";
import { useContext } from "react";
import { ShoppingContex } from "../context/ShopingContext";

const imageStyling = {
    width:"300px",
    height:"300px",
}
const textStyle = {
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    textAlign:"center",
    fontSize:"25px"
}

const descriptionText = {
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    textAlign:"center",
    fontSize:"25px",
    height:"50px"
}

const buttonStyle ={
    width:"100px",
    height:"50px",
    backgroundColor:"green",
    border:"solid 2px black",
    borderRadius:"10px",
    color:"white",
    fontSize:"15px"
    
}




function ProductShowCase(props){

    const {AddToCart} = useContext(ShoppingContex)
    
    return <div className="ShowCase">

        <img src={props.image} style={imageStyling}></img>
        <h1 style={textStyle}>{props.name}</h1>
        <h2 style={descriptionText}>{props.description}</h2>
        <ul style={{listStyle:"none", display:"flex", flexDirection:"row", gap:"10px", position:"relative", right:"35px", alignItems:'center'}}>
            <li>
                <h3 style={textStyle}>{props.price} $</h3>
            </li>
            <li>
                <button style={buttonStyle} onClick={() => AddToCart(props.id, props.price)}>Add to car</button>
            </li>
        </ul>
        
        

    </div>
    
}

export default ProductShowCase