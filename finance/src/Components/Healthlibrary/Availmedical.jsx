// import React from 'react'
// import { Row,Col,Container } from 'react-bootstrap'
// import ReactPlayer from 'react-player'
// export const Availmedical = () => {
//   return (
//     <div>
//         <Container>
//       <Row>
//         <Col><h2>How to Avail Medicard Benefits?</h2>
      
//         <div class="card" style={{backgroundColor:'white' ,width:'50rem'}}>
//   <div class="card-body" >
//     <h2>Download Bajaj Finserv Health App!</h2>
//     <p>Download App from Play Store and login by your credentials. Post that - Go to Active Plans and then select required medicard</p>
//   </div>
// </div>
// <div class="card" style={{backgroundColor:'white',width:'50rem'}}>
//   <div class="card-body">
//      <h2>Download Bajaj Finserv Health App!</h2>
//     <p>Download App from Play Store and login by your credentials. Post that - Go to Active Plans and then select required medicard</p>
//   </div>
// </div>
// <div class="card" style={{backgroundColor:'white',width:'50rem'}}>

//   <div class="card-body">
//     <h2>Download Bajaj Finserv Health App!</h2>
//     <p>Download App from Play Store and login by your credentials. Post that - Go to Active Plans and then select required medicard</p>
//   </div>
// </div>
  
        
        
//         </Col>
//          <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         
//          {/* <ReactPlayer src='https://www.youtube.com/watch?v=4Nhhnakj740' height={200} width={400} ></ReactPlayer> */}
//          <iframe width="400" height="200" src="https://www.youtube.com/embed/qtMmhMnwDvg" title="What is Medicard?"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//          </Col>
//       </Row>
//     </Container> 




//     </div>
//   )
// }








import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const Availmedical = () => {
  return (
    <div style={{ backgroundColor: '#f5faff', padding: '30px 0' }}>
      <Container>
        <Row>
          {/* Left Side - Steps */}
            <Col
            md={7}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <iframe
              width="360"
              height="236"
              src="https://www.youtube.com/embed/qtMmhMnwDvg"
              title="What is Medicard?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: '10px' , justifyContent: 'center',
                  alignItems: 'center'}}
             
             ></iframe>
             </Col>

          {/* Right Side - Video */}
        



             <Col md={5}>
            <h2 style={{ marginBottom: '25px' }}>How to Avail Medicard Benefits?</h2>

            {/* Step 1 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  marginRight: '15px',
                  marginTop: '8px'
                }}
              >
                1
              </div>
              <Card style={{ backgroundColor: 'white', flex: 1 }}>
                <Card.Body>
                  <h5>Download Bajaj Finserv Health App!</h5>
                  <p>
                    Download App from Play Store and login by your credentials. Post that - Go to
                    Active Plans and then select required medicard.
                  </p>
                </Card.Body>
              </Card>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  marginRight: '15px',
                  marginTop: '8px'
                }}
              >
                2
              </div>
              <Card style={{ backgroundColor: 'white', flex: 1 }}>
                <Card.Body>
                  <h5>Select type of Benefit and Generate Voucher</h5>
                  <p>
                    Select Labs and Radiology, Free Doctor Consultation or Medicard Discount and
                    generate Voucher accordingly. Voucher ID will be sent to you via SMS and
                    WhatsApp.
                  </p>
                </Card.Body>
              </Card>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  marginRight: '15px',
                  marginTop: '8px'
                }}
              >
                3
              </div>
              <Card style={{ backgroundColor: 'white', flex: 1 }}>
                <Card.Body>
                  <h5>Visit Hospital and Show Voucher</h5>
                  <p>
                    Visit Hospital at selected date to avail benefits. Show voucher at Hospital’s
                    Registration desk at time of bill payment and you will be able to enjoy benefit.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  )
}
