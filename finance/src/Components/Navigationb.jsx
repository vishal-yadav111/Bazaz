// import React from 'react'
// import Button from 'react-bootstrap/Button';

// import { AiFillCamera } from "react-icons/ai";

// import { HiDesktopComputer } from "react-icons/hi";
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Navigationb.css'
// import { GrCloudComputer } from "react-icons/gr";

// import { FaSearch } from "react-icons/fa";

// import { InputGroup, FormControl } from "react-bootstrap";

// import { FaHandshake } from "react-icons/fa";

// import Dropdown from 'react-bootstrap/Dropdown';
// export const Navigationb = () => {
//   return (
//     <div >


//             <Navbar expand="lg" className="custom-navbar"  >
//       <Container fluid>
//         <Navbar.Brand href="#">
//   <img
//     src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Bajaj_Finserv_Logo_Reverse_1_9d2f0dd77d.webp"
//     alt="Logo"
//     style={{ height: "48px", width: "120px" }}
//   />
// </Navbar.Brand>
//         {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           {/* <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
           



//              */}
//           {/* </Nav> */}
         
         
         
//  <InputGroup className="mx-auto my-2 my-lg-0" style={{ maxWidth: "700px", flex: 1 }}>
//       <InputGroup.Text>
      
      
      
//        <Dropdown>
//       <Dropdown.Toggle variant="" id="dropdown-basic">
//         All
//       </Dropdown.Toggle>
  
//       <Dropdown.Menu >
//         <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">LABS</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">DOCTOR COSULTATION</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">HOSPITALS</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
     
      
      
      
      
      
      
      
      
      
      
      
//       </InputGroup.Text>
//       <FormControl
//         // type="tel"
//         // maxLength="10"
//         placeholder="Search  System , Doctor , Specialist , Clinics"
        
          
//       />
    
//     </InputGroup>

            
       
// <div className="d-flex align-items-center ms-auto gap-3 ms-lg-auto mt-3 mt-lg-0 ">
//              <div style={{}}>
//             <h3><GrCloudComputer />
//             <Dropdown>
//       <Dropdown.Toggle variant="" id="dropdown-basic">
//        ABHA
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">LABS</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">DOCTOR COSULTATION</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">HOSPITALS</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
            
//             </h3>
   
           
             
//             </div>
       
//             <h3> <FaHandshake />
//                 <Dropdown>
//       <Dropdown.Toggle variant="" id="dropdown-basic">
//        FOR PARTNER
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">LABS</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">DOCTOR COSULTATION</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">HOSPITALS</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//             </h3>
          
//             <Button variant="light" >Login/signup</Button>
//             </div>
           

//         </Navbar.Collapse>
        
//       </Container>
//     </Navbar>


//     </div>
//   )
// }


























// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import { GrCloudComputer } from "react-icons/gr";
// import { FaHandshake } from "react-icons/fa";
// import { InputGroup, FormControl } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';

// import './Navigationb.css'

// export const Navigationb = () => {
//   return (
//     <div>
//       <Navbar expand="lg" className="custom-navbar">
//         <Container fluid className="d-flex align-items-center">

//           {/* Logo */}
//           <Navbar.Brand href="#" className="d-flex align-items-center">
//             <img
//               src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Bajaj_Finserv_Logo_Reverse_1_9d2f0dd77d.webp"
//               alt="Logo"
//               style={{ height: "48px", width: "120px" }}
//             />
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="navbarScroll" />

//           <Navbar.Collapse id="navbarScroll" className="d-flex align-items-center">

//             {/* Search Box */}
//             <InputGroup className="mx-auto my-2 my-lg-0" style={{ maxWidth: "700px", flex: 1 }}>
//               <InputGroup.Text className="p-0">
//                 <Dropdown>
//                   <Dropdown.Toggle variant="" id="dropdown-basic" className="p-0">
//                     All
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">LABS</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">DOCTOR COSULTATION</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">HOSPITALS</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </InputGroup.Text>
//               <FormControl placeholder="Search  System , Doctor , Specialist , Clinics" />
//             </InputGroup>

//             {/* Right Side Options */}
//             <div className="d-flex align-items-center gap-4 ms-lg-auto">

//               {/* ABHA */}
//               <div className="d-flex align-items-center gap-2 abha-partner">
//                 <GrCloudComputer size={22} />
//                 <Dropdown>
//                   <Dropdown.Toggle variant="" id="dropdown-abha" className="p-0">
//                     ABHA
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">LABS</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">DOCTOR COSULTATION</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">HOSPITALS</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//               {/* Partner */}
//               <div className="d-flex align-items-center gap-2 abha-partner">
//                 <FaHandshake size={22} />
//                 <Dropdown>
//                   <Dropdown.Toggle variant="" id="dropdown-partner" className="p-0">
//                     FOR PARTNER
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">LABS</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">DOCTOR COSULTATION</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">HOSPITALS</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//               {/* Login */}
//               <Button variant="light">Login/signup</Button>
//             </div>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }



























import { useNavigate } from 'react-router-dom';

import React from 'react';
import Button from 'react-bootstrap/Button';
import { GrCloudComputer } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { InputGroup, FormControl } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navigationb.css';
import { Link } from 'react-router-dom';

export const Navigationb = () => {
  const offcanvasId = 'app-offcanvas';
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar px-3">
      <Container fluid>

        {/* ---------- MOBILE BAR (< lg) ---------- */}
        <div className="d-flex align-items-center w-100 d-lg-none">
          {/* Left: Hamburger */}
          <Navbar.Toggle aria-controls={offcanvasId} className="me-2" />

          {/* Logo immediately after hamburger */}
          <Navbar.Brand href="#" className="me-3" onClick={()=>navigate('/')}>
           <Link  >
            <img
              src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Bajaj_Finserv_Logo_Reverse_1_9d2f0dd77d.webp"
              alt="Logo"
              style={{ height: 40, width: 'auto' }}
              
              
         />
            </Link>
          </Navbar.Brand>

          {/* Remaining icons + login (push to right) */}
          <div className="ms-auto d-flex align-items-center gap-3 abha-partner">
            {/* ABHA (icon only mobile) */}
            <div className="d-flex align-items-center">
              <GrCloudComputer size={30} />
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-abha"
                  className="p-0 border-0 bg-transparent d-none d-lg-inline"
                >
                  ABHA
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>ALL</Dropdown.Item>
                  <Dropdown.Item>LABS</Dropdown.Item>
                  <Dropdown.Item>DOCTOR CONSULTATION</Dropdown.Item>
                  <Dropdown.Item>HOSPITALS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Partner (icon only mobile) */}
            <div className="d-flex align-items-center ">

              <FaHandshake size={30} />
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-partner"
                  className="p-0 border-0 bg-transparent d-none d-lg-inline"
                >
                  FOR PARTNER
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>ALL</Dropdown.Item>
                  <Dropdown.Item>LABS</Dropdown.Item>
                  <Dropdown.Item>DOCTOR CONSULTATION</Dropdown.Item>
                  <Dropdown.Item>HOSPITALS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Button variant="light" size="sm" className="px-3">LOGIN</Button>
          </div>
        </div>

        {/* Offcanvas (mobile) */}
        <Navbar.Offcanvas
          id={offcanvasId}
          aria-labelledby={`${offcanvasId}-label`}
          placement="start"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`${offcanvasId}-label`}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-grid gap-3">
              <Button variant="outline-secondary">Book Appointment</Button>
              <Button variant="outline-secondary">Health Packages</Button>
              <Button variant="outline-secondary">Find Hospitals</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        {/* ---------- DESKTOP BAR (≥ lg) ---------- */}
        <div className="d-none d-lg-flex align-items-center w-100 gap-3">
          {/* Left: Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Bajaj_Finserv_Logo_Reverse_1_9d2f0dd77d.webp"
              alt="Logo"
              style={{ height: 48, width: 120 }}
              onClick={()=>navigate('/')}
            />
          </Navbar.Brand>

          {/* Center: Search */}
          <div className="flex-grow-1 d-flex justify-content-center">
            <InputGroup style={{ maxWidth: 700, width: '100%' }}>
              <InputGroup.Text className="p-0">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic" className="p-0">
                    All
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>ALL</Dropdown.Item>
                    <Dropdown.Item>LABS</Dropdown.Item>
                    <Dropdown.Item>DOCTOR CONSULTATION</Dropdown.Item>
                    <Dropdown.Item>HOSPITALS</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup.Text>
              <FormControl placeholder="Search System, Doctor, Specialist, Clinics" />
            </InputGroup>
          </div>

          {/* Right: ABHA + Partner + Login (with text on desktop) */}
          <div className="d-flex align-items-center gap-4 ms-auto abha-partner">
            <div className="d-flex align-items-center gap-2">
              <div>
                <div style={{paddingLeft:'8px'}}>
              <GrCloudComputer size={40} />
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle variant="" id="dropdown-abha-lg" className="p-0">
                  ABHA
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>ALL</Dropdown.Item>
                  <Dropdown.Item>LABS</Dropdown.Item>
                  <Dropdown.Item>DOCTOR CONSULTATION</Dropdown.Item>
                  <Dropdown.Item>HOSPITALS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <div>
                <div style={{paddingLeft:'12px'}}>
              <FaHandshake size={40} />
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle variant="" id="dropdown-partner-lg" className="p-0">
                  FOR PARTNER
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>ALL</Dropdown.Item>
                  <Dropdown.Item>LABS</Dropdown.Item>
                  <Dropdown.Item>DOCTOR CONSULTATION</Dropdown.Item>
                  <Dropdown.Item>HOSPITALS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>

            <Button variant="light" className="px-4">LOGIN</Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
