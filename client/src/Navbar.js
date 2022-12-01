import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
return (
    <div className="navbarDiv">
        <NavLink exact to="/" style={{ marginRight: "10px" }}>Home</NavLink>
        <NavLink exact to="/ProteinShakeCards" style={{ marginRight: "10px" }}>Protein Shakes</NavLink>
        <NavLink exact to="/CreateShakes" style={{ marginRight: "10px" }}>Create Shakes</NavLink>
        <NavLink exact to="/Login" style={{ marginRight: "10px" }}>Login</NavLink>
        <NavLink exact to="Signup" style={{ marginRight: "10px" }}>SignUp</NavLink>
    </div>
)
}

export default NavBar;