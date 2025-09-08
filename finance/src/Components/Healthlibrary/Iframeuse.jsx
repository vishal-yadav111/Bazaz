import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Iframeuse = () => {
  return (
    <div>
           <Container>
      <Row>
        <Col>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588685276!2d82.90870719803013!3d25.320739742462344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1756987634538!5m2!1sen!2sin"
      
      style={{width:"50%", height:"550px"  ,loading:"lazy" }}></iframe>
      <iframe src="https://www.wikipedia.org/" frameborder="0" style={{width:"50%", height:"550px", style:"border:0;" }}></iframe>
        
        </Col>
          <Col>
          <iframe src="https://openai.com/" frameborder="0" style={{width:"100%", height:"100%"   }}></iframe>
          </Col>
<iframe src='https://www.canva.com/design/DAGyFCW4j1I/bNTsMUdX60e63itto5YO3A/edit?utm_content=DAGyFCW4j1I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'></iframe>
      </Row>

    </Container>
    </div>
  )
}
