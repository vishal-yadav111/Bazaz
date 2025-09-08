import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GiHypodermicTest } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaClinicMedical } from "react-icons/fa";
import './Navigationb.css'
import Container from 'react-bootstrap/esm/Container';

export const Labservice = () => {
  return (
   
    
   <div className='screen' style={{marginTop:'50px'}}> 
  
<div className='cardc'>
  
<div >
  
 
 <Card >
      
      <Card.Body >
      
       <GiHypodermicTest size={70} />
       
        
       
      </Card.Body>
     <Card.Title>Lab test Test</Card.Title>
    </Card>
    
     
    </div>


    <div>
 <Card >
      
      <Card.Body >
      
       <FaUserDoctor  size={70} />
      
        
       
      </Card.Body>
      <Card.Title>Doctor</Card.Title>
    </Card>
    </div>



    <div>
 <Card >
      
      <Card.Body>
       
     <IoStorefrontSharp  size={70}/>
     
        
       
      </Card.Body>
      <Card.Title>Store</Card.Title>
    </Card>
    </div>

    <div>
 <Card >
      
      <Card.Body>
       
       <FaClinicMedical size={70} />
       
        
       
      </Card.Body>
      <Card.Title>Pharmacy</Card.Title>
    </Card>
    </div>
        </div>
    </div>
  )
}
