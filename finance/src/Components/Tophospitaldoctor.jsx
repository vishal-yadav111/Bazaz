import React from 'react'
import  Bookappointment  from '../Bookappointment.json'
  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './articlepage.css'
import { Container, NavLink } from 'react-bootstrap';
import { FaHospital } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

const carddata=[
    {

    }
]
export const Tophospitaldoctor = () => {

  return (
    <div>
        <h5>Explore top Hospital's Doctors</h5>
        <p>Explore 250+ top doctors in hospitals near you</p>
        <div>
          <div style={{justifyContent:"space-between",display:'flex'}}>
            <a href="">
            <span>Pearl Women's Hospital & Yash IVF India Pvt Ltd</span></a>
          <NavLink  ><span>Deccan Hardikar Hospital - Sushrut Medical Care </span></NavLink>
            
           <NavLink> <span>ONP Prime Hospital</span></NavLink>
            <span>Jehangir Hospital</span>
            <span>Poona Eye Care</span>
          </div>
            
<div className='doctorcardcontainer'>
{Bookappointment.map((doctorcard)=>(
    
     <Card style={{ minWidth: '16.5rem',backgroundColor:'white' ,padding:'10px',   
              alignItems: 'flex-start',minHeight:'300px',
              gap:'10px'}}>
      <Card.Img variant="top" src={doctorcard.docimg} style={{objectFit:"cover",height:'70px',width:'70px'}} />
      <Card.Body style={{padding:'0'}}>
        <Card.Title>{doctorcard.drname}</Card.Title>
       <p style={{fontWeight:'100'}}> {doctorcard.specialist}</p>
       <p style={{margin:'0'}}> <IoTimerOutline />{doctorcard.experience}</p>
       <p style={{margin:'0'}}> <FaHospital />Pearl Women's Hospital </p>
       <p style={{margin:'0'}}><FaLocationDot />{doctorcard.adress}</p>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'50px'}}
        >
        <h6 style={{}}>{doctorcard.doctorfees}</h6>
        <Button variant="outline-primary">Book Now</Button>
        </div>
      </Card.Body>
    </Card>

))}
 
 
</div>

        </div>


    </div>
  )
}
