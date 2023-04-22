import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        <NavLink className="navbar__link" activeClassName="navbar__link--active" exact to="/">
          Inicio
        </NavLink>
        <NavLink className="navbar__link" activeClassName="navbar__link--active" to="/acerca-de">
          Acerca de mi
        </NavLink>
        <NavLink className="navbar__link" activeClassName="navbar__link--active" to="/contacto">
          Contacto
        </NavLink>
      </nav>
    );
  }

export default Navbar;
