import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const DropDownButrtons = {
    backgroundColor:"green",
    width:"200px",
    height:"50px",
    color:"white",
    border:"none"
}

function DropDownMenu(){
    const {userData, LogOut} = useContext(UserContext);
    return <div className="dropDownMenu">
        
        {!userData.loged ? <Link to="/login"><button style={DropDownButrtons}>Login</button></Link>  : false}
        {!userData.loged ? <Link to="/register"><button style={DropDownButrtons}>Register</button></Link>  : false}
        
        {userData.loged ? <button style={DropDownButrtons} onClick={()=>LogOut()}>logout</button>: false}
    </div>
}

export default DropDownMenu