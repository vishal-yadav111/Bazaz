import React, { useState } from 'react'
import './Navigationb.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap/esm/NavLink'
import { useNavigate } from "react-router-dom";

export const Nav2 = () => {

const [opendropdown,setOpenDropdown]=useState(false);
 const navigate = useNavigate();
  
  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);


  return (
  <div className="d-none d-lg-block">
    <div className='Nav2'> <h5>BAJAJ FINSERV HEALTH LIMITED
</h5>
    </div>

    <div style={{display:'flex', flexWrap:'wrap',paddingLeft:'100px',paddingRight:'100px', margin:'10px'}}>
<Dropdown show={opendropdown === "appointment"}   onMouseEnter={() => handleMouseEnter("appointment")}
          onMouseLeave={handleMouseLeave}
>
      <Dropdown.Toggle variant="" id="dropdown-basic" onClick={() => navigate("/appointment")}>
        Book Appointment
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > In clinic</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Online Consultation</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
 

 <Dropdown show={opendropdown === "labtest"}   onMouseEnter={() => handleMouseEnter("labtest")}
          onMouseLeave={handleMouseLeave}>
  <Link >
      <Dropdown.Toggle variant="" id="dropdown-basic" onClick={() => navigate("/labtest")}>
       Book Lab Test
      </Dropdown.Toggle>
</Link>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Full Body</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Diabetecs </Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fever Profiles</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Body X-ray & MRI</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown show={opendropdown === "healthlibrary"}   onMouseEnter={() => handleMouseEnter("healthlibrary")}
          onMouseLeave={handleMouseLeave}>
      <Dropdown.Toggle variant="" id="dropdown-basic" onClick={() => navigate("/healthlibrary")}>
        Health Library
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Web Storie</Dropdown.Item>
        <Dropdown.Item href="#/action-2">General Health</Dropdown.Item>
        <Dropdown.Item href="#/action-3">COVID-19</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ayurveda</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cancer</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cholestrol</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Hypertension</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hearts Health</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Diabetics</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Yoga and exercise</Dropdown.Item>
         <Dropdown.Item href="#/action-1">Skin And Hair</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Woman's health</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Immunity</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Nutrition</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mental Wellness</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Health Test</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Thyroid</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown >


    <Dropdown show={opendropdown === "Corporate benifit"}   onMouseEnter={() => handleMouseEnter("Corporate benifit")}
          onMouseLeave={handleMouseLeave}>
      <Dropdown.Toggle variant="" id="dropdown-basic" onClick={() => navigate("/Corporate benifit")}>
        Corporate Benifits
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Workplace Program</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>





    <Dropdown show={opendropdown === "medicards"}   onMouseEnter={() => handleMouseEnter("medicards")}
          onMouseLeave={handleMouseLeave}>
      <Dropdown.Toggle variant="" id="dropdown-basic"  className='medicard'  onClick={() => navigate("/medicards")}>
        Medicards
      </Dropdown.Toggle>

    
    </Dropdown>



    
<div style={{ marginLeft: "auto" }}>
     <button className='button '>Download App</button>

</div>
    </div>
   
    </div>
  )
} 











