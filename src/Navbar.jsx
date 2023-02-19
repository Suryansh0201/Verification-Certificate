import React from 'react'

const Navbar = () => {
  return (
    <div style={{background: "#7AD7F0"}}>
        <div className="main" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="logo">
            <img src="logo.png" alt="" height="80rem" width="250rem" />
            </div>
            <div className='check-nav' style={{display:"flex",marginLeft:"30rem"}}>
            <div className="nav1">
            <h3 >Privacy & Policy</h3>
            </div>
            <div className="nav2">
            <h3 style={{marginLeft:"3rem"}}>Contact Us</h3>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar