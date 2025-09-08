import React from 'react'
import ReactPlayer from 'react-player'
import { Container } from 'react-bootstrap'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Medicards = () => {
  return (
    <div  >


<Container className='pt-4 pb-4'>
    
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>            <h2>Save huge on your hospital spends!</h2>
            <p>Medicard is a loyalty card which enables you to get massive discounts on Hospital offerings like Doctor Consultations, Lab Tests & much more.</p></Col>

          <Col xs={12} sm={12} md={12} lg={6} style={{display:'flex',justifyContent:'flex-end'}}> <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/image_1_c337919e23.png" alt="" srcset="" height={"168px"} width={'368px'} style={{objectFit:'cover'}} />
          </Col>
      </Row>
    </Container>

<div style={{backgroundColor:'#f0f9ff'}}>
    <Container className='pt-4'>
      <Row>
        <Col xs={12} lg={6}>
        <h3>Available Benifits</h3>
        <div className='d-flex mt-4' >
          <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Frame_1000002387_e94d6fc3aa.svg" alt="" srcset="" height={40} width={40} />
          <div>
            <h4 style={{margin:'0'}}>Lab Discounts</h4>
            <p>Enjoy upto 30% discounts on Lab Tests</p>
          </div>

        </div>
       
        <div className='d-flex'>
          <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/doctor_svgrepo_com_2_1_201105f2e7.svg" alt="" srcset="" height={40} width={40} />
          <div>
            <h4 style={{margin:'0'}}>Avail upto 21 free doctor visits</h4>
            <p>Avail upto 21 free doctor visits</p>
          </div>

        </div>
        
        <div className='d-flex'>
          <img src="https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/Membership_Discounts_490075abe5_1_944a98d621.svg" alt="" srcset="" height={40} width={40} />
          <div>
            <h4 style={{margin:'0'}}>Room Rent Discount</h4>
            <p>Redeem upto 15% instant discounts on hospital room rent
</p>
          </div>

        </div>
        </Col>
        
         <Col xs={12} lg={6}>
         <div style={{ display:'flex', justifyContent:'flex-end'}}>
          <div>
         <h3>What is Medicard?</h3>
         
         <ReactPlayer src='youtube.com/watch?time_continue=1&v=qtMmhMnwDvg&embeds_referring_euri=https%3A%2F%2Fwww.bajajfinservhealth.in%2F&source_ve_path=MjM4NTE' height={200} width={400}/>
         </div>
         </div>
         
         </Col>
        
      </Row>
    </Container>
</div>
    </div>
  )
}
