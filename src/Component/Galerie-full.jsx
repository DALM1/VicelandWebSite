import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import Nav from "./Nav";
import Galerie from './Galerie';

function Galerie_full() {
  return (
    <div>
         <div className='header'>
            <Nav />
            <Link to="/">
            <img className='mainlogo' src={Logo} alt="" />
            </Link>
        </div>
        <Galerie />
    </div>
  )
}

export default Galerie_full