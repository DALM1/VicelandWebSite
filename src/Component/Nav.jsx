import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='header'>
    <div className='header_ul'>
    
    </div>
    <Link to="/actus">
    <ul>Actus</ul>
  </Link>
  <a
    href="https://viceland.tebex.io/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ul>Boutique</ul>
  </a>

  <a
    href="https://discord.gg/g3Xn7FX4"
    target="_blank"
    rel="noopener noreferrer"
  >
      <ul>Discord</ul>
  </a>
  
</div>
  )
}

export default Nav