import React from 'react'
import Aboutlabp from './Aboutlabp.json'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

export const Labpartner = () => {
  return (
    <Container>
      <h2>Our Lab Partner</h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" ,padding:'30px 0'}}>
        
        {Aboutlabp.map((labimage, index) => (
          <Card
            key={index}
            style={{
              width: '200px',
              backgroundColor: 'white',
              padding: '10px',
              textAlign: 'left'
            }}
          >
            <Card.Img
              variant="top"
              src={labimage.img}
              style={{
                height: '64px',
                width: '64px',
                
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            />
            <Card.Body style={{ padding: '0' }}>
              <Card.Title style={{ fontSize: '1rem', marginBottom: '4px' }}>
                {labimage.labname}
              </Card.Title>
              <Card.Text style={{ fontSize: '0.85rem', color: '#555',marginTop:'20px' }}>
                {labimage.tit}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  )
}
