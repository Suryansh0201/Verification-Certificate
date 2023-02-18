import React from 'react'
import './bottomSection.css'
import Flogo from '../../images/logo.png'
const bottomSection = () => {
  return (
    <div className='footer'>
        <img className='f-img' src={Flogo} alt=''/>
        <hr/>
        <p className='f-content'>© 2019-2023 <a href='https://kartexa.com/' target='blank'>  KarTexa.com</a></p>
    </div>
  )
}

export default bottomSection