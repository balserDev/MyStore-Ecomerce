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
        
        <ul style={{paddingRight:"100px", listStyle:"none"}}>
            <li>
                <Link to="/car" onClick={cartSound}>
                    <ShopingCar></ShopingCar>
                </Link>
            
            </li>
        </ul>
       
    </div>
}

export default Header