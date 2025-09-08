
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '..//Navigationb.css'
import Container from 'react-bootstrap/esm/Container';
import { MdBloodtype } from "react-icons/md";
import { RiBodyScanFill } from "react-icons/ri";
import { FaXRay } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

export const Toplabservice = () => {
  return (
    <div style={{marginTop:'30px'}}>
      <Container>
      <h2> <RiServiceFill color='rgb(255, 191, 94)'/>Top Lab Service</h2>
    </Container>
    

<div className='screen' style={{marginTop:'40px'}}> 
 
  
<div className='cardc'>
  
<div >
  
 
 <Card style={{backgroundColor:'#eff2f4'}}>
      
      <Card.Body >
      
       <MdBloodtype  size={50} color='#005dac'/>
       
        
       
      </Card.Body>
    
    </Card>
    <p style={{fontWeight:'bold',textAlign:'center'}}>Blood tests at home</p>
    
     
    </div>


    <div>
 <Card style={{backgroundColor:'#eff2f4'}}>
      
      <Card.Body >
      
       <RiBodyScanFill   size={50} color='#005dac'/>
      
        
       
      </Card.Body>
     
    </Card>
     <p style={{fontWeight:'bold',textAlign:'center'}}>Blood tests at home</p>
    </div>



    <div>
 <Card style={{backgroundColor:'#eff2f4'}}>
      
      <Card.Body>
       
     <FaXRay  size={50} color='#005dac'/>
     
        
       
      </Card.Body>
    
    </Card>
     <p style={{fontWeight:'bold',textAlign:'center'}}>X-RAY</p>
    </div>

    <div>
 <Card style={{backgroundColor:'#eff2f4'}}>
      
      <Card.Body>
       
       <FaMicroscope size={50} color='#005dac'/>
       
        
       
      </Card.Body>
      
    </Card>
     <p style={{fontWeight:'bold',textAlign:'center' }}>Labs near you</p>
    </div>
        </div>
       
    </div>
    </div>





        
   
  )
}
