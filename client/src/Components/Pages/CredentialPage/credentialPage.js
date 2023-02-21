import React from 'react'
import TopSection from '../../TopSection/topSection'
import MidSec from './midSec'
import BottomSection from '../../BottomSection/bottomSection'
import QrPage from '../a'
const credentialPage = () => {
  return (
    <div className='main'>
        <TopSection/>
        <MidSec style={{Height:"50%"}}/>
        <QrPage/>
        <BottomSection/>
    </div>
  )
}

export default credentialPage