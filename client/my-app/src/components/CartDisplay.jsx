import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { ShoppingContex } from "../context/ShopingContext";

function CartDisplay(){
    const {carItems, carTotal, products} = useContext(ShoppingContex)

    
    return <div className="CarDisplay">
        {products.map((product => {
            if(carItems[product.id]){
                return <CartItem
                id={product.id}
                img={product.image}
                name={product.name}
                price={product.price}
                amount={carItems[product.id]}
                />
            }
            
        }))}

        <div className="MainTitle" style={{fontSize:"20px"}}>Total: {carTotal} $</div>
        <button className="buttonStyle" style={{backgroundColor:"orange", color:"black", marginTop:"20px", border:"solid 2px black", width:"300px"}}>Check Out</button>
        </div>
        
}

export default CartDisplay