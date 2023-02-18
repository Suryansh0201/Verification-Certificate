import React from 'react'
import './midSection.css'
import Photo from '../../images/verify-pic.png'
const midSection = () => {
  return (
    <div className='main-mid'>
        <h1 className='heading'>Certificate Validation</h1>
        <div className='mid-content'>
            <div className='l-content'>
                <img src={Photo} alt='' className='photo'/>
            </div>
            <div className='r-content'>
            <div className='pair'>
                <h3 className='tittle'>This certificate was issued for:</h3>
                <h4 className='response'>Rahul Singh</h4>
            </div>

            <div className='pair'>
                <h3 className='tittle'>Role:</h3>
                <h4 className='response'>React Developer Intern</h4>
            </div>

            <div className='pair'>
            <h3 className='tittle'>Start Date: </h3>
            <h4 className='response'> 1 January 2023</h4>
            </div>
            
            <div className='pair'>
            <h3 className='tittle'>End Date: </h3>
            <h4 className='response'> 31 January 2023</h4>
            </div>

            <div className='pair'>
                <h3 className='tittle'> Issue Date:</h3><h4 className='response'> 16 Febuary 2023</h4>
                
            </div>

            <div className='pair'>
                <h3 className='tittle'>This certificate was issued by:</h3>
                <h4 className='response'>Kartexa</h4>
            </div>

            <div className='pair'>
                <h3 className='tittle'>Internship Organizer:</h3>
                <h4 className='response'>Company name</h4>
            </div>

            <div className='pair'>
                <h3 className='tittle'>Certificate ID:</h3>
                <h4 className='response'>654435154981</h4>
            </div>

            </div>
        </div>
        
    </div>
  )
}

export default midSection