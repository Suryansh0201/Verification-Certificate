import React from 'react'
import './certiDesign.css'
import Logo from "../images/logo.png"
const certiDesign = () => {
  return (
    <div className='certi'>
    <div className='certi-content'>
        <div className='certi-head'>
          <h5 className='head-content'>CERTIFICATE OF <br/> <h1 className='head-2'>INTERNSHIP</h1></h5>
          
          <img src={Logo} className='certi-logo' alt=''/>
        </div>
        <div className='certi-mid'>
            <h1>This Certificate is presented to</h1>
            <p className='name'>HARSH KANSAL</p>
            <p className='details'>For completing the "<b>React Developer</b>" Internship <br/>
            from 1 February 2023 to 20 February 2023. <br/>
            We appreciate his work and contribution
            </p>
        </div>
    </div>
    </div>
  )
}

export default certiDesign