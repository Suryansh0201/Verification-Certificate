import React from 'react'
import './midSec.css'
import QrPage from '../qrScanner';
import QrCodeScannerSharpIcon from '@mui/icons-material/QrCodeScannerSharp';
import ValidationPage from '../ValidationPage'


const midSec = () => {
  function handleSubmit(){
    return <ValidationPage/>
  }
  
  return(
    
    <div className='all'>
    <div className='head'><h1>Verify Certificate</h1></div>
    <div className='main-mid'>
        <form class="row g-3 needs-validation form" novalidate>
  <div class="col-md-4">
  <label for="validationCustom02" class="form-label">Certificate ID</label>
    <input type="text" class="form-control" id="validationCustom02" placeholder='Enter certificate ID' required/>
    
  </div>

  <div class="col-12">
    <button onSubmit={handleSubmit()} class="btn btn-primary" type="submit">Validate Certificate</button>
  </div>
</form>
<div className='or'>OR</div>
<div className='scan' >
<a href='/verify/scan' ><QrCodeScannerSharpIcon className='scan-img'style={{fontSize:'170px',justifyItems:"center"}}/></a>
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