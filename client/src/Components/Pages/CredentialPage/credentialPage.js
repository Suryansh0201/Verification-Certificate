import React from 'react'
import TopSection from '../../TopSection/topSection'
import MidSec from './midSec'
import BottomSection from '../../BottomSection/bottomSection'
import QrPage from '../qrScanner'
const credentialPage = () => {
  return (
    <div className='main'>
        <TopSection/>
        <MidSec style={{Height:"50%"}}/>
        <BottomSection/>
    </div>
  )
}

export default credentialPage