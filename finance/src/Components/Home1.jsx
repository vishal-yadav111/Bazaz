import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navigationb.css';

export const Home1 = () => {
  return (
    <div  className='screen' style={{display:'flex',backgroundColor:'rgb(243, 243, 243)'}}>  
        <Container>
         <Row>
         <Col className='home'>
         <h1 className='mt-3 mb-3'>Book Tests at Trusted Labs</h1>
         <h5 style={{color:'rgb(255, 191, 94)'}}> Upload prescription to book your tests</h5>




         </Col>
        <Col style={{display:'flex',justifyContent:'end'}}>
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/home_page_intro_66169c9673.webp" alt="" srcset="" style={{height:'280px',width:'400px'}}/>
        
        
        </Col>
      </Row>
      </Container>
      
      </div>
  )
}
