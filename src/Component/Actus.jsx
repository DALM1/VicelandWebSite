import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Logo from '../img/logo.png'
import Section2 from './Section2'
import Weazle from '../img/weazle.png'
import Actussec1 from './Actus-sec1'

function Actus() {
  return (
    <div>
        <div>
              <div className='header'>
                    <Nav />
                    <Link to="/">
                        <img className='mainlogo' src={Logo} alt="" />
                    </Link>
                </div>
        </div>
            <div>
                <img className='weazlelogo' src={Weazle} alt="" />
            </div>    
                <div>
                    <Section2 />
                    <Section2 />
                        <div className='section1'>
                            <Actussec1 />
                        </div>
                    <Section2 />
                    <Section2 />
                </div>


    </div>
  )
}

export default Actus