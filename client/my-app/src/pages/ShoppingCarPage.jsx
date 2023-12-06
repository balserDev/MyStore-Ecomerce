import React from "react";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import CartDisplay from "../components/CartDisplay";
import Footer from "../components/Footrer";

import { useContext } from "react";
import { ShoppingContex } from "../context/ShopingContext";



function ShoppingCarPage(){
    const {cartLenght} = useContext(ShoppingContex);
    return <div>
        <Header></Header>
        <h1 className="MainTitle">Your Cart</h1>
        {cartLenght > 0 ? <CartDisplay></CartDisplay> : <div className="MainTitle">Empty So Far</div>}
     
    </div>
}

export default ShoppingCarPage