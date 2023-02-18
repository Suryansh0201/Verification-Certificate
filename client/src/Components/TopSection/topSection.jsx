import React from 'react'
import './topSection.css'
import Logo from '../../images/logo.png'
const topSection = () => {
  return (
   <div className='main'>
       <div className='navbar'>
        <div className='l-nav'>
             <a href='https://kartexa.com/' target='blank'> 
              <img src={Logo} className='logo' alt=''/>
             </a>
        </div>
        <div className='r-nav'>
             <ul className='right-list'>
                 <a href='/'><li>Privacy Policy</li></a>
                 <a  href='/'><li>Contact Us</li></a>
             </ul>
        </div>
       </div>
   </div>
  )
}

export default topSection