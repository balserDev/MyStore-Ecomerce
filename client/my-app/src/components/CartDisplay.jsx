import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ShoppingContex } from "../context/ShopingContext";

function CartDisplay(){
    const {carItems, carTotal, products, GoToCheckOut} = useContext(ShoppingContex)
    const {userData} = useContext(UserContext)
    const checkOutStyle1= {
    backgroundColor:"orange",
    color:"black",
    marginTop:"20px",
    border:"solid 2px black",
    width:"300px"
    }
    const checkOutStyle2= {
        backgroundColor:"orange",
        color:"black",
        marginTop:"20px",
        border:"solid 2px black",
        width:"300px",
        opacity:"0.5"
    }

    
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
        <button onClick={userData.loged ? GoToCheckOut: ()=>{}} className="buttonStyle" style={userData.loged ? checkOutStyle1 : checkOutStyle2  }>{userData.loged ? "Check out": "Login to checkout"}</button>
        </div>
        
}

export default CartDisplay