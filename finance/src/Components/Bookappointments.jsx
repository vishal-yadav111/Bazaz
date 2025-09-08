// import React from 'react'
// import Bookappointment from '../Bookappointment.json'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import './Doctorcard.css';

// export const Bookappointments = () => {
//   return (
//     <div className="appointment">
//       {Bookappointment.map((Appointment, index) => (
//         <Card className="doctor-card" key={index}>
//           {/* Left - Doctor Image */}
//           <div className="doctor-left">
//             <img src={Appointment.docimg} alt="Doctor" className="doctor-image" />
//           </div>

//           {/* Middle - Doctor Info */}
//           <div className="doctor-middle">
//             <h5 className="doctor-name">{Appointment.drname}</h5>
//             <p className="doctor-specialist">{Appointment.specialist}</p>
//             <p className='doctor-specialist'>{Appointment.cource} </p>
//             <p className="doctor-exp">{Appointment.experience}</p>
//             <p className="doctor-clinic">{Appointment.Hospitalname}</p>
//             <p className="doctor-address">{Appointment.adress}</p>
//           </div>

//           {/* Right - Fees + Button */}
//           <div className="doctor-right">
//             <p className="doctor-fee"> {Appointment.doctorfees}</p>
//             <Button variant="outline-primary" className="book-btn">Book Appointment</Button>
//           </div>
//         </Card>
//       ))}
//     </div>
//   )
// }








// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './Doctorcard.css';
// import Bookappointment from '../Bookappointment.json';

// export const Bookappointments = () => {
//     return (
//         <Container fluid>
//             <Row>
//                 {/* Column for Sort and Filters */}
//                 <Col md={3}>
//                     <Card className="mb-3">
//                         <Card.Body>
//                             <Card.Title>Sort by</Card.Title>
//                             <ul className="list-unstyled">
//                                 <li>Relevance</li>
//                                 <li>Price: Low-High</li>
//                                 <li>Experience: Most Experience first</li>
//                                 <li>Distance: Nearest first</li>
//                             </ul>
//                         </Card.Body>
//                     </Card>
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>Filters</Card.Title>
//                             <ul className="list-unstyled">
//                                 <li>Specialities</li>
//                                 <li>General Physician</li>
//                                 <li>Dentist</li>
//                                 <li>Dermatologist</li>
//                                 <li>Paediatrician</li>
//                             </ul>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 {/* Column for Doctor Cards */}
//                 <Col md={9}>
//                     <h5 className="mb-3">Showing {Bookappointment.length} doctors in Pune</h5>
//                     <div className="appointment">
//                         {Bookappointment.map((Appointment, index) => (
//                             <Card className="doctor-card mb-3" key={index}>
//                                 {/* Left/Middle Section: Image and Info */}
//                                 <div className="doctor-main-info d-flex align-items-start">
//                                     <div className="doctor-left">
//                                         <img src={Appointment.docimg} alt="Doctor" className="doctor-image" />
//                                     </div>
//                                     <div className="doctor-middle">
//                                         <h5 className="doctor-name">{Appointment.drname}</h5>
//                                         <p className="doctor-specialist">{Appointment.specialist}</p>
//                                         <p className='doctor-cource'>{Appointment.cource}</p>
//                                         <p className="doctor-exp">{Appointment.experience}</p>
//                                         <p className="doctor-clinic-info mt-2">
//                                             <i className="bi bi-hospital"></i>
//                                             {Appointment.Hospitalname}
//                                         </p>
//                                         <p className="doctor-address-info">
//                                             <i className="bi bi-geo-alt"></i>
//                                             {Appointment.adress}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Right Section: Fees and Button */}
//                                 <div className="doctor-right">
//                                     <p className="doctor-fee">{Appointment.doctorfees}</p>
//                                     <Button variant="outline-primary" className="book-btn">Book Appointment</Button>
//                                 </div>
//                             </Card>
//                         ))}
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };




















import React from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import './Doctorcard.css';
import Bookappointment from '../Bookappointment.json';

import Dropdown from 'react-bootstrap/Dropdown';

import Form from 'react-bootstrap/Form';
import { Cardsfilter } from './Cardsfilter';
import { Paginationandbottom } from './Paginationandbottom';
import { Articlepage } from './Articlepage';
import { Tophospitaldoctor } from './Tophospitaldoctor';

export const Bookappointments = () => {
  return (
    <div style={{backgroundColor:'#eff2f4',paddingTop:'10px'}}>
    <Container  >
      <Row>
        {/* Left Column - Sort and Filters */}
        <Col md={4} xs={12} className='d-none d-lg-block '>





          <Card className="mt-4 sortingcard">
           
          <Cardsfilter />
 </Card>

        </Col>

        {/* Right Column - Doctor Cards */}
        <Col md={8} xs={12} style={{paddingTop:'20px'}}>
          {/* <h5 className="mb-3">Showing {Bookappointment.length} doctors in Pune</h5> */}
          <div className="appointment">
            {Bookappointment.map((Appointment, index) => (
              <div className="doctor-card" key={index}>
                
                {/* LEFT SECTION: Doctor Info */}
                <div className="doctor-main-info">
                  <div className="doctor-left">
                    <img
                      src={Appointment.docimg}
                      alt="Doctor"
                      className="doctor-image"
                    />
                  </div>
                  <div className="doctor-middle">
                    <h5 className="doctor-name">{Appointment.drname}</h5>
                    <p className="doctor-specialist">{Appointment.specialist}</p>
                    <p className="doctor-cource">{Appointment.cource}</p>
                    <p className="doctor-exp">{Appointment.experience}</p>
                    <p className="doctor-clinic-info mt-2">
                      <i className="bi bi-hospital"></i> {Appointment.Hospitalname}
                    </p>
                    <p className="doctor-address-info">
                      <i className="bi bi-geo-alt"></i> {Appointment.adress}
                    </p>
                  </div>
                </div>

                {/* RIGHT SECTION: Fee + Book Button */}
                <div className="doctor-right">
                  <p className="doctor-fee">{Appointment.doctorfees}</p>
                  <Button variant="outline-primary" className="book-btn">
                    Book Appointment
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Tophospitaldoctor />
          <Paginationandbottom />
        </Col>
      </Row>
      
    </Container>
   
    <Articlepage/>
    </div>
    
  );
};
