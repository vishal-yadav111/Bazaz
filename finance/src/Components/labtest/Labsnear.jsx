
import React from 'react'
import  Labtest from './Labtest.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '..//articlepage.css'
import { Container, NavLink } from 'react-bootstrap';
import { FaHospital } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
export const Labsnear = () => {
  return (

    <div>
        <Container>
        
        

            
<div className='doctorcardcontainer'>
{Labtest.map((doctorcard)=>(
    
     <Card style={{ minWidth: '19.5rem',backgroundColor:'white' ,padding:'10px',   
              alignItems: 'flex-start',minHeight:'300px',
              gap:'10px'}}>
      <Card.Img variant="top" src={doctorcard.docimg} style={{height:'64px',width:'64px'}} />
      <Card.Body style={{padding:'0'}}>
        <Card.Title>{doctorcard.drname}</Card.Title>
       <p style={{fontWeight:'100'}}> {doctorcard.specialist}</p>
       <p style={{margin:'0'}}> <CiLocationOn />{doctorcard.experience}</p>
       <p style={{margin:'0'}}> <CiTimer />{doctorcard.Hospitalname} </p>
       
        <div style={{display:'flex',marginTop:'50px'}}
        >
        
        <Button variant="outline-primary" style={{width:'100%'}}>Book Now</Button>
        </div>
      </Card.Body>
    </Card>

))}
 
 
</div>
</Container>
        </div>


   
   
  )
}














// import React from 'react'
// import Labtest from './Labtest.json'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import '..//articlepage.css'
// import { NavLink } from 'react-bootstrap';
// import { CiLocationOn, CiTimer } from "react-icons/ci";

// export const Labsnear = () => {
//   return (
//     <div>
//       <h5>Explore top Hospital's Doctors</h5>
//       <p>Explore 250+ top doctors in hospitals near you</p>

//       <div>
//         <div style={{ justifyContent: "space-between", display: 'flex', flexWrap: 'wrap' }}>
//           <a href="">
//             <span>Pearl Women's Hospital & Yash IVF India Pvt Ltd</span>
//           </a>
//           <NavLink><span>Deccan Hardikar Hospital - Sushrut Medical Care </span></NavLink>
//           <NavLink><span>ONP Prime Hospital</span></NavLink>
//           <span>Jehangir Hospital</span>
//           <span>Poona Eye Care</span>
//         </div>

//         {/* ✅ Horizontal scrollable cards */}
//         <div
//           className='doctorcardcontainer'
//           style={{
//             display: 'flex',
//             gap: '16px',
//             overflowX: 'auto',
//             paddingBottom: '10px',
//             scrollbarWidth: 'thin'
//           }}
//         >
//           {Labtest.map((doctorcard, index) => (
//             <Card
//               key={index}
//               style={{
//                 minWidth: '19.5rem',
//                 backgroundColor: 'white',
//                 padding: '10px',
//                 minHeight: '300px',
//                 flex: '0 0 auto' // ✅ important: prevents shrinking, keeps card fixed width
//               }}
//             >
//               <Card.Img
//                 variant="top"
//                 src={doctorcard.docimg}
//                 style={{ height: '64px', width: '64px', objectFit: 'cover' }}
//               />
//               <Card.Body style={{ padding: '0' }}>
//                 <Card.Title>{doctorcard.drname}</Card.Title>
//                 <p style={{ fontWeight: '100' }}>{doctorcard.specialist}</p>
//                 <p style={{ margin: '0' }}>
//                   <CiLocationOn /> {doctorcard.experience}
//                 </p>
//                 <p style={{ margin: '0' }}>
//                   <CiTimer /> {doctorcard.Hospitalname}
//                 </p>

//                 <Button
//                   variant="outline-primary"
//                   style={{
//                     width: '100%',
//                     marginTop: '40px',
//                     display: 'block'
//                   }}
//                 >
//                   Book Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
