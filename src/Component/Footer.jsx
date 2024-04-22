import React from 'react'
import Logo from '../img/logo.png'
import Agency from '../img/agency.png'

function Footer() {
  return (
    <div className='footer' >           
    
     <img className='footerlogo' src={Logo} alt="" />
     <img className='agencylogo' src={Agency} alt="" />
    
    </div>
  )
}

export default Footer