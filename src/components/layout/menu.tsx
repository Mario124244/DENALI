import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';






const Navbar = () => {
  // ✅ Hook dentro del componente
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
      
        <span className="letter letter1">d</span>
        <span className="letter letter2">e</span>
        <span className="letter letter3">n</span>
        <span className="letter letter4">a</span>
        <span className="letter letter5">l</span>
        <span className="letter letter6">i</span>
        <span className="sub">Centro Terapeútico</span>
        
      </div>


      {/* Hamburguesa */}
      <div className="menu-icon" onClick={toggleMenu}>☰</div>

      {/* Menú */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/informacion">Información</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><a href="#">Ayuda</a></li>
        <li><a href="/about">Paquetes</a></li>
        <li><a href="#">Redes</a></li>
      </ul>

      {/* Botones */}
      <button className="btn-appointment">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21
                  12.14 12.14 0 003.89.62 1 1 0 011 1v3.5a1 1 0 01-1 1A16
                  16 0 014 4a1 1 0 011-1h3.5a1 1 0 011 1 12.14 12.14 0 00.62
                  3.89 1 1 0 01-.21 1.11l-2.2 2.2z" />
        </svg>
      </button>

      <button className="btn-appointment">Cita</button>
    </nav>
  );
};

export default Navbar;
