import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import Logo from '../imagenes/Logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // función alternar el ménu
  const tocarMenu = () => {
    setIsOpen(!isOpen);
  }  
  return (
    <nav className='navbar'>
      {/* Logo */}
      <div className='logo'>
        <img src={Logo} alt='logo'/>
        <span>Spritis Of Technology 💻  </span>
      </div>

      {/*Botón desplegable*/}

      <button className='menu-desplegable' onClick={tocarMenu}>
        ☰
      </button>

        <ul className={`listaOrdenada ${isOpen ? "open" : ""}`} >
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/mision">Misión & Visión</Link></li>
            <li><Link to="/cronograma">Cronograma</Link></li>
            <li><Link to="/instalacion">Instalación</Link></li>
            <li><Link to="/herramientas">Herramientas</Link></li>
            <li><Link to="/sugerencias">Sugerencias</Link></li>
            <li><Link to="/leyes">Leyes</Link></li>
            <li><Link to="/registro">Registro</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
