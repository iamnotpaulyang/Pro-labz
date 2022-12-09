import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

//Logout

function NavBar({ updateUser, currentUser }) {
  const history = useHistory();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        updateUser(false);
        history.push("/login");
      }
    });
  };
  return (
    <div className="navbarDiv">
      {currentUser.id !== undefined && (
        <div className="logoutButtonDiv">
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
      <NavLink
        className="nav-button"
        exact
        to="/"
        style={{ marginRight: "10px" }}
      >
        Home
      </NavLink>
      <NavLink
        className="nav-button"
        exact
        to="/proteinshake"
        style={{ marginRight: "10px" }}
      >
        Protein Shakes
      </NavLink>
      <NavLink
        className="nav-button"
        exact
        to="/createshake"
        style={{ marginRight: "10px" }}
      >
        Create Shakes
      </NavLink>
      <NavLink
        className="nav-button"
        exact
        to="/review"
        style={{ marginRight: "10px" }}
      >
        Create Review
      </NavLink>
      <NavLink
        className="nav-button"
        exact
        to="/editreviewform"
        style={{ marginRight: "10px" }}
      >
        Edit Review
      </NavLink>
      {currentUser.id === undefined && (
        <div>
          <NavLink
            className="nav-button"
            exact
            to="/login"
            style={{ marginRight: "10px" }}
          >
            Login
          </NavLink>
          <NavLink
            className="nav-button"
            exact
            to="signup"
            style={{ marginRight: "10px" }}
          >
            SignUp
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
