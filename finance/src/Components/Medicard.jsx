import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { FaBookMedical } from "react-icons/fa";

import { GiMicroscope } from "react-icons/gi";

import { FaUserDoctor } from "react-icons/fa6";


import Button from 'react-bootstrap/Button';



export const Medicard = () => {
  return (
   
<Container className='d-flex align-items-center justify-content-between' style={{backgroundColor:'rgb(240,249,255)',padding:'20px',borderRadius:'10px'}}>
<div  style={{ flex: 1, marginRight: '20px'}}>
    <h4>Maximize your savings with Medicards on hospital expenses!</h4>
<div className='d-flex'>


  <p className='p-2 mr-2'>
  <FaUserDoctor />    Free doctor consultation</p>

<p className='p-2 mr-2'>
<FaBookMedical />
    
   Labs and Radiology Wallet</p>

   <p className='p-2 mr-2'>  <GiMicroscope />Offers on Lab tests, pharmacy, & more</p>


</div>
 <Button variant="outline-primary">Explore More</Button>
   
   
</div>

<div style={{marginLeft:'auto'}}>
    <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_1707481178_cc217fef55.png" alt="" srcset="" 
    
    style={{height:'170px',width:'160px', objectFit:'cover'}} className='img-fluid'/>
    
  </div>
  </Container>
    
  )
}
