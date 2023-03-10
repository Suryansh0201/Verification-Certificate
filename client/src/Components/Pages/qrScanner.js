import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid} from '@material-ui/core';
import {QrReader}  from 'react-qr-reader';


function QrPage() { 
  
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const classes = useStyles();

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
   }
  return (
    <Container className={classes.conatiner}>
          <Card>
              <h2 className={classes.title}>Scan Qr Code on Certificate</h2>
              <CardContent>
                  <Grid container spacing={2}>
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
      
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
export default QrPage;