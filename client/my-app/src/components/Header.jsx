import React from "react";
import { useState } from "react";
import ShopingCar from "./ShopingCar";
import { Link } from "react-router-dom";
import RegisterSfx from '../sfx/RegisterSfx.mp3'
import DropDownMenu from "./DropDownMenu";

function Header(props){

    const[userDorpDown, toggleDropDown] =  useState(false);

    function cartSound(){
        let audio = new Audio(RegisterSfx)
        audio.play()
    }

    function ToggleDropDown(){
        if(userDorpDown){
            toggleDropDown(false);
        }else{
            toggleDropDown(true);
        }
    }

    return <div className="Header" >
        <Link to="/" style={{textDecoration:"none", color:"white", transitionDuration:"1s"}} className="icon">
            <div className="Logo-text">My Store</div>
        </Link>
        
        <ul style={{paddingRight:"100px", listStyle:"none", display:"flex", flexDirection:"row", gap:"50px", alignItems:"center"}}>
            <li>
                <div >
                    <img onClick={ToggleDropDown} src="https://static.thenounproject.com/png/1995071-200.png" style={{width:"80px", height:"80px", filter:"invert()"}}></img>
                    {userDorpDown ? <DropDownMenu></DropDownMenu> : false}
                </div>
                
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