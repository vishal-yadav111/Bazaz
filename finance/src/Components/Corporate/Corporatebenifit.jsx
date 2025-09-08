import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, Form } from 'react-bootstrap';

export const Corporatebenifit = () => {
  return (
    <div style={{padding:'40px 0',backgroundColor:'#eff2f4'}}>

 <Container>
    <div >
      <Row>
        <Col xs={12} lg={6} md={6} sm={12}>
<div style={{display:'flex',flexDirection:'column' ,gap:'15px'}} >
    <h3 >Benefits you get</h3>
    <Card style={{backgroundColor:'white',minWidth:'100%',display:'flex',flexDirection:'row', gap:'10px',padding:'10px'}} >
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/6_Preventive_Health_Checkup_8b8b883df2.svg" alt="" srcset="" height={40} width={40} />
        <div style={{  display: 'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'start'}}>
        <h5>Lab package</h5>
        <p style={{margin:'0'}}>Stay ahead of your illness with our customised health packages</p>
        </div>
    </Card>


    <Card style={{backgroundColor:'white',minWidth:'100%',display:'flex',flexDirection:'row', gap:'10px',padding:'10px'}} >
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Inclinic_GP_b1f9f43f09.svg" alt="" srcset="" height={40} width={40} />
        <div style={{  display: 'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'start'}}>
        <h5>Doctor consultation</h5>
        <p style={{margin:'0'}}>Connect with experienced doctors near you at best deals</p>
        </div>
    </Card>


    <Card style={{backgroundColor:'white',minWidth:'100%',display:'flex',flexDirection:'row', gap:'10px',padding:'10px'}} >
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Online_Appointment_d1a80b129d.svg" alt="" srcset="" height={40} width={40} />
        <div style={{  display: 'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'start'}}>
        <h5>Teleconsultation</h5>
        <p style={{margin:'0'}}>Consultations gone to your real time deals and time while you sit back </p>
        </div>
    </Card>

    <Card style={{backgroundColor:'white',minWidth:'100%',display:'flex',flexDirection:'row', gap:'10px',padding:'10px'}} >
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Discounts_e88e4b56a6.svg" alt="" srcset="" height={40} width={40} />
        <div style={{  display: 'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'start'}}>
        <h5>Network discounts</h5>
        <p style={{margin:'0'}}>Enjoy exclusive benefits from our wide network of healthcare partners</p>
        </div>
    </Card>
</div>


        </Col>




        <Col xs={12} lg={6} md={6} sm={12}>
        <div style={{justifyContent:'center',  display: 'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
        <img src="https://cmsuatstor.blob.core.windows.net/cms-uat/assets/Group_1707481034_2e2f3a4ddb.png" alt="" srcset="" height={250} width={280}/>
        <h3>Access exclusive healthcare benefits from your organisation</h3>
        <Form style={{width:'100%' ,margin:'10px 0'}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="email" placeholder="Enter Corporate Email" />
             
             </Form.Group>
        </Form>
        <Button style={{padding:'10px 30px', backgroundColor:'#005dac' ,fontWeight:'bold'}}>Submit</Button>
        </div>
        </Col>
      </Row>
      </div>
    </Container>


    </div>
  )
}
