import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/sports"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Sports
        </NavLink>
        <NavLink
          to="/sports/new"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Add Sport
        </NavLink>
        <NavLink
          to="/players"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Athletes
        </NavLink>
        <NavLink
          to="/players/new"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkgrey",
          }}
        >
          Add Athlete
        </NavLink>
      </div>
    )
}

export default NavBar;