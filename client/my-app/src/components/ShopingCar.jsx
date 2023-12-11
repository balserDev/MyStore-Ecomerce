import React from "react"
import { useContext } from "react"
import { ShoppingContex } from "../context/ShopingContext"


const amountText = {
    fontSize:"20px",
    color:"yellow",
    textAlign:"center",
    marginTop:"10px"
    
}



function ShopingCar(props){
    const {cartLenght} = useContext(ShoppingContex)

    return <div style={{height:"80px"}}>
        <img style={{width:"80px", height:"80px", filter:"invert(100%)"}} src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"></img>
        <div style={{border:"solid 5px yellow",borderRadius:"50%",  width:"40px",  height:"40px", position:"relative", top:"-40px",  right:"-60px"}}>
            <div style={amountText} className="counter">{cartLenght ? cartLenght : 0}</div>
        </div>
    </div>
}
export default ShopingCar
