import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom"

function NavBar({updateUser, currentUser}){
    const history = useHistory()

    const handleLogout = () => {
        fetch(`/logout`, {
            method:"DELETE"
        })
        .then(res =>{
            if(res.ok){
            updateUser(false)
            history.push("/login")
            }
        })
    }
    return (
    <div className="navbarDiv">
        <div className="logoutButtonDiv">
        <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
        <NavLink exact to="/" style={{ marginRight: "10px" }}>Home</NavLink>
        <NavLink exact to="/proteinshake" style={{ marginRight: "10px" }}>Protein Shakes</NavLink>
        <NavLink exact to="/createshake" style={{ marginRight: "10px" }}>Create Shakes</NavLink>
        <NavLink exact to="myshakes" style={{ marginRight: "10px" }}>My Shakes</NavLink>
        <NavLink exact to="/review" style={{ marginRight: "10px" }}>Create Review</NavLink>
        <NavLink exact to="/login" style={{ marginRight: "10px" }}>Login</NavLink>
        <NavLink exact to="signup" style={{ marginRight: "10px" }}>SignUp</NavLink>
    </div>
)
}

export default NavBar;