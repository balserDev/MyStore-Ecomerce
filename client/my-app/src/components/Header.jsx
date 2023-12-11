import React from "react";
import { useContext } from "react";
import ShopingCar from "./ShopingCar";
import { carContext } from "../context/ShopingContext";
import { Link } from "react-router-dom";
import RegisterSfx from '../sfx/RegisterSfx.mp3'
function Header(props){
    function cartSound(){
        let audio = new Audio(RegisterSfx)
        audio.play()
    }

    return <div className="Header" >
        <Link to="/" style={{textDecoration:"none", color:"white"}}>
            <div className="Logo-text">My Store</div>
        </Link>
        
        <ul style={{paddingRight:"100px", listStyle:"none", display:"flex", flexDirection:"row", gap:"50px", alignItems:"center"}}>
            <li>
                <img src="https://static.thenounproject.com/png/1995071-200.png" style={{width:"80px", height:"80px", filter:"invert()"}}></img>
            </li>
            <li>
                <Link to="/car" onClick={cartSound} style={{textDecoration:"none"}}>
                    <ShopingCar></ShopingCar>
                </Link>
            </li>
           
            
            
        </ul>
       
    </div>
}

export default Header