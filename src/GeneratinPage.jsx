import React from 'react'
import {useFormik} from "formik";

const initialValues = {
    certificateNum: "",
    name: "",
    role: "",
    organization: "",
    intershipOrg: "",
    start_date: "",
    end_date: "",
    cer_issue_date: "",
    file:"",
  };


const GeneratinPage = () => {
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,
        onSubmit: (values,action) => {
          let certificateNum = document.getElementById("certificateNum").value;
          let name = document.getElementById("name").value;
          let role = document.getElementById("role").value;
          let organization = document.getElementById("organization").value;
          let intershipOrg = document.getElementById("intershipOrg").value;
        
          var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		      var letters = /^[a-zA-Z][a-zA-Z ]*$/;
		      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var mobnum = /(0|91)?[6-9][0-9]{9}/;
          if(certificateNum==="" && name==="" && role === "" && organization === "" , intershipOrg==="")
          {
            alert("please fill all the fields");
          }
    else{
      console.log(values)
    }
        },
      });
  return (
    <div className='generatingpage-main' style={{background: "linear-gradient(to right, #a1c4fd , #c2e9fb",width:"100%",paddingBottom:"3rem",marginTop:"-1.35rem"}}>
        <h1 style={{textAlign:"center",paddingTop:"1rem"}}>ISSUE CERTIFICATE 🏅</h1>
        <div className="main">
            {/* <div className="left">
            <img src="a-man-celebrating-the-graduation-holding-certificate-free-vector-removebg-preview.png" style={{marginTop:"-1rem"}} alt="" height="200rem" width="280rem" />
                
            </div> */}
            <div className="right" >
           
           
            <form className='form-create' style={{display:"flex"}} onSubmit={handleSubmit} >
            <div> <img src="graduation-certificate-7342961-5995106.webp" style={{marginLeft:"1rem"}} alt="" height="280rem" width="350rem" />
            
           </div>
            <div>
        <div className='certificateNum-heading'>
        
        <input type="text" name='certificateNum' id='certificateNum' placeholder='Ceritificate Number' autoComplete='off'
        value={values.certificateNum}
        onChange={handleChange}
        onBlur={handleBlur}/>
        <br />
        </div>
        <div className='name-heading'>
            <input type="text" name='name' id='name' placeholder='Full Name' autoComplete='off'
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div style={{display:"flex"}}>
        <div className='role-heading'>
        
        <input style={{width:"9rem"}} type="text" name='role' id='role' placeholder='Role' autoComplete='off'
        value={values.role}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='organization-heading'>
        <input style={{width:"9rem",marginLeft:"0.85rem"}} type="text"  name='organization' id='organization' placeholder='Organization' autoComplete='off'
        value={values.organization}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        </div>
        <div className='date-heading'>
        <input type="text"  name='intershipOrg' id='intershipOrg' placeholder='Internship Organizer' autoComplete='off'
        value={values.intershipOrg}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div style={{display:"flex"}}>
        <div className='date-heading' style={{marginTop:"0.2rem"}}>
            <label htmlFor="start_date" style={{marginLeft:"2rem",fontWeight:"bold"}}>Internship Start Date</label>
        <input type="date" style={{width:"9rem",marginTop:"-0.1rem"}}  name='start_date' id='date' placeholder="MM/DD/YYYY"  
        value={values.start_date}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        {/* <div className='password-heading'>
            <label htmlFor="profile_pic">profile</label>
        <input id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture />
            <br />
        </div> */}
        <div className='password-heading' id='int-end' style={{marginTop:"0.2rem",marginLeft:"-3.9rem"}}>
        <label htmlFor="end_date" style={{marginLeft:"-2rem",fontWeight:"bold"}}>Internship End Date</label>
        <input type="date" style={{width:"9rem",marginLeft:"-6rem",marginTop:"-0.1rem",marginLeft:"-2rem"}}  name='end_date' id='date' placeholder="MM/DD/YYYY"  
        value={values.end_date}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        </div>
        <div style={{display:"flex"}}>
        <div className='date-heading' style={{marginTop:"0.2rem"}}>
            <label htmlFor="cer_issue_date" style={{marginLeft:"2rem",fontWeight:"bold"}}>Certificate Issue Date</label>
        <input type="date" style={{width:"9rem",marginTop:"-0.1rem"}}  name='cer_issue_date' id='date' placeholder="MM/DD/YYYY"  
        value={values.cer_issue_date}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        <div className='date-heading' id='int-end' style={{marginTop:"0.2rem",marginLeft:"-7.5rem"}}>
            <label htmlFor="cer_issue_date" id='int-end' style={{fontWeight:"bold",marginLeft:"-2rem"}}>Add Profile Pic</label>
        <input type="file" style={{width:"9rem",marginTop:"-0.1rem",marginLeft:"-2rem"}}  name='file' id='add_file' 
        value={values.file}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
        {/* <div className='password-heading'>
            <label htmlFor="profile_pic">profile</label>
        <input id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture />
            <br />
        </div> */}
        </div>
        <div style={{display:"flex"}}>
          {/* <div className="captcha">
            <ReCAPTCHA style={{transform:"scale(0.95)",transformOrigin:"0 0",marginLeft:"2rem",marginTop:"1rem"}}
    sitekey="6Lf6JPIjAAAAANP9Fcj7qxku87LThyJ9HJ3Cjp_7"
    onChange={(value) => {setcaptcha(true)}}
  />
          </div> */}
          <div>
        <button type='submit' className="create-btn">Generate Cerificate</button>
        </div>
        </div>
        </div>
      </form>
     

            </div>
        </div>
    </div>
  )
}

export default GeneratinPage