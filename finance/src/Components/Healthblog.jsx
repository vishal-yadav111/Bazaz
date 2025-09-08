import React from 'react'
import  Hospitadat from '../Hospitaldat.json'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

export const Healthblog = () => {
    
  return (
    
        <Container> 
          <h2>Health Blog</h2>    
<div className='d-flex' style={{gap:'20px',overflow:'auto',whiteSpace:'nowrap',scrollbarWidth:"none",msOverflowStyle:'none',marginTop:'20px',marginBottom:'10px'}} >
  
    {
    Hospitadat.map((item)=>(
        

 <Card key={item.id}
 
 style={{ minWidth: '18rem' ,backgroundColor:'white' ,borderRadius:'10px'}} >
      <Card.Img variant="top" src={item.img} />
      
      <Card.Body>
        <h6 style={{textAlign:'left'}}>{item.specialization}</h6>
        <Card.Title  
        style={{fontSize:'1.2rem',whiteSpace:'normal',overflow:'hidden',textAlign:'left'}}>{item.blogtext}</Card.Title>
        
        
     
      </Card.Body>
     
    </Card>
))}
  
</div>
</Container>

  )
}
