







import Button from 'react-bootstrap/Button';

import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

export const Hospital = () => {

const hospitaldata=[
  {id:0,
  name: "Deccan Hardikar Hospital",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/provider/38395330-ce56-4963-bee6-656f7b0a2c44/HospitalProfileImage_P_Deccan.jpg',
    type:'multispeciality',
    distance:'Pune 2km'
  },
  {id:1,
  name: "Ruby Hall Clinic - Sassoon Road",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/provider/fa1beec0-785f-4786-b585-9d3ac7526efa/HospitalProfileImage_Ruby_hall_clinic_sasoon_road_waifu2x_art_noise1_scale.png',
    type:'multispeciality',
    distance:'Pune 3km'
  }
,
  {id:2,
  name: "Noble Hospital",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1671975039405_HospitalProfileImage_nobe;d.PNG',
    type:'multispeciality',
    distance:'Pune 3.5km'
  }
  ,
  {id:3,
  name: "Manipal Hospital - Kharadi",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670653119619_HospitalProfileImage_3.png',
    type:'multispeciality',
    distance:'Pune 4km'
  }
  ,
  {id:4,
  name: "Manipal Hospital - Baner",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/provider/1674193507140_0012j00000GmNlHAAVHospitalProfileImage_P1_Manipal%20Baner.jpg',
    type:'multispeciality',
    distance:'Pune 10km'
  }
  ,
  {id:5,
    name:"Pearl Women's Hospital & IVF",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/provider/3c9ee98a-f88a-4f92-a0b3-d91efdb2c4ba/HospitalProfileImage_Default_Profile_Image.png',
    type:'multispeciality',
    distance:'Pune 11km'
  }
  ,
  {id:6,
  name: "ONP Prime Hospital",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/provider/9fd73624-9741-4fca-b4a6-424aa9101990/HospitalProfileImage_P_ONP.jpg',
    type:'multispeciality',
    distance:'Pune 13km'
  }
  ,
  {id:7,
  name: "Poona Eye Care",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670499930235_HospitalProfileImage_Capture.PNG',
    type:'multispeciality',
    distance:'Pune 4.5km'
  }
  ,
  {id:8,
  name: "Jehangir Hospital",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670499651796_HospitalProfileImage_1.png',
     type:'multispeciality',
    distance:'Pune 3km'
  }
   ,
  {id:9,
  name: "Ace Hospital And Research Centre",
    img:'https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670499939567_HospitalProfileImage_Profile.v1.jpg',
     type:'multispeciality',
    distance:'Pune 4km'
  }

]



  return (
    <div>
    
      <Container className="mt-4 mb-2">
        <h4 className="fw-bold">Top Hospitals</h4>
        <p>Access 6500+ top hospitals across India</p>
        
      </Container>
      <Container className="py-2">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            gap: "20px",
            paddingBottom: "10px",

            scrollbarWidth: 'none', msOverflowStyle: 'none'
          }}>






{hospitaldata.map((hd)=>(

  <Card style={{ minWidth: "18rem", flex: "0 0 auto", backgroundColor: 'white' }} key={hd.id}>
            <Card.Img
              variant="top"
              src={hd.img}
              style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{hd.name}</Card.Title>
              <Card.Text>{hd.type}
              </Card.Text>
              <p>{hd.distance}</p>
              <Button variant='outline-primary' style={{ width: '18rem' }} >View details</Button>
            </Card.Body>
          </Card>


))}














        </div>
      </Container>

    </div>
  )
}
