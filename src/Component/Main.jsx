import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section5 from './Section5'



function Main() {
  return (
    <div>
        <div className='header'>
            <Nav />
            <Link to="/">
            <img className='mainlogo' src={Logo} alt="" />
            </Link>
        </div>
            <div className='section1'>
                <Section1 />
            </div>
                <div className='section2'>
                    <Section2 />
                    <Section2 />
                    <Section2 />
                </div>
                    <div className='section1'>
                        <Section3 />
                    </div>
                        <div>
                            <Section2 />
                            <Section2 />
                            <Section2 />
                        </div>

                            <div className='section1'>
                            <Section5 />
                            </div>
    </div>
  )
}

export default Main