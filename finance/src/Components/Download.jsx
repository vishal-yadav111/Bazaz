import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Placeholder } from 'react-bootstrap';
import { InputGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const Download = () => {






   
  return (
    <div style={{backgroundColor:'#eff2f4'}}>
        <Container className='p-3'>
      <Row>
        <Col style={{display:'flex',justifyContent:'center'}}>
        <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Screenshot_2023_08_11_at_12_02_unk7309_45d67dac74.svg" alt="" srcset="" />
        
        </Col>





        <Col>
        <h2>Download the Bajaj Health App</h2>
        <p>Download the Bajaj Health App</p>
        <h6>Get the link to download the app</h6>
       
<InputGroup style={{ maxWidth: "300px" }}>
      <InputGroup.Text>+91</InputGroup.Text>
      <FormControl
        type="tel"
        maxLength="10"
        placeholder="Enter mobile number"
      />
    </InputGroup>
   <div style={{padding:"30px"}}> 
 <Button variant="outline-secondary" >Send APP Link</Button>
 </div>
 <div style={{display:'flex', gap:'20px'}}>
 <img src="https://bajajfinservhealth.azureedge.net/png/test/33b2d836-3e96-41cf-81ca-d43c912acf88.webp" alt="" srcset="" style={{height:'36px',width:'126px'}} />
 <img src="https://bajajfinservhealth.azureedge.net/png/test/5e34bd17-0a8b-4662-9b47-2156bd79a2ef.webp" alt="" srcset="" style={{height:'36px',width:'126px'}} />
 </div>
        </Col>
      </Row>
      </Container>



    </div>
  )
}
