import React, {useState} from "react"
import Logo from '../assets/bee-001.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>

        <img src={Logo} />

        <div className="hiddenLinks">
        <Link to="/">Início </Link>
        <Link to="/menu">Menu </Link>
        <Link to="/about">Bolos </Link>
        <Link to="/contact">Contato </Link>
        </div>

      </div>

      <div className="rightSide">
        <Link to="/">Início </Link>
        <Link to="/menu">Menu </Link>
        <Link to="/about">Bolos </Link>
        <Link to="/contact">Contato </Link>

        <button onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>

      </div>
    </div>
  )
}

export default Navbar
