import React /*{useState, useRef}*/ from 'react'
import './midSec.css'
//import { QrReader } from 'react-qr-reader';
import QrCodeScannerSharpIcon from '@mui/icons-material/QrCodeScannerSharp';
import QrPage from '../a'

/*function
const qrRef = useRef(null);
const [scanResultWebCam, setScanResultWebCam] =  useState('');
const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
   }*/

const midSec = () => {
  return (
    <div className='all'>
    <div className='head'><h1>Verify Certificate</h1></div>
    <div className='main-mid'>
        <form class="row g-3 needs-validation form" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Certificate ID</label>
    <input type="text" class="form-control" id="validationCustom01" value="Enter certificate ID" required/>
    
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label"> Learner Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Enter learner last name" required/>
    
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Validate Certificate</button>
  </div>
</form>
<div className='or'>OR</div>
<div className='scan' >
    <a href='../a' onClick={QrPage}><QrCodeScannerSharpIcon className='scan-img'style={{fontSize:'170px',justifyItems:"center"}}
    /></a>
</div>
    </div>
  {/*}  <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />*/}
    </div>
  )
}

export default midSec