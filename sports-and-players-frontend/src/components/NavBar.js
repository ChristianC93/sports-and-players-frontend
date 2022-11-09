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
          activestyle={{
            background: "darkgrey",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/sports"
          exact
          style={linkStyles}
          activestyle={{
            background: "darkgrey",
          }}
        >
          Sports
        </NavLink>
        <NavLink
          to="/sports/new"
          exact
          style={linkStyles}
          activestyle={{
            background: "darkgrey",
          }}
        >
          Add Sport
        </NavLink>
        <NavLink
          to="/players"
          exact
          style={linkStyles}
          activestyle={{
            background: "darkgrey",
          }}
        >
          Athletes
        </NavLink>
        <NavLink
          to="/players/new"
          exact
          style={linkStyles}
          activestyle={{
            background: "darkgrey",
          }}
        >
          Add Athlete
        </NavLink>
      </div>
    )
}

export default NavBar;