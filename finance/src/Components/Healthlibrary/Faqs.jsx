import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export const Faqs = () => {
    const askedquestion = [
    {
        ques:'What is  medicards',
        ans:"Medicard is a virtual membership card which provides healthcare and related benefits to the card holder. The card can be purchased through Bajaj Finserv Health app and website as well as at select Partner Hospital outlets." 

    },
      {
        ques:'where can i view my medicards',
        ans:"Medicard is a virtual membership card which provides healthcare and related benefits to the card holder. The card can be purchased through Bajaj Finserv Health app and website as well as at select Partner Hospital outlets." 

    },
      {
        ques:'how do i avail benifit mentioned on cards',
        ans:"Medicard is a virtual membership card which provides healthcare and related benefits to the card holder. The card can be purchased through Bajaj Finserv Health app and website as well as at select Partner Hospital outlets." 

    },
      {
        ques:'how should i contact if i have queries',
        ans:"Medicard is a virtual membership card which provides healthcare and related benefits to the card holder. The card can be purchased through Bajaj Finserv Health app and website as well as at select Partner Hospital outlets." 

    }
];
  return (
    <Container style={{paddingTop:'40px',paddingBottom:'40px'}}>


      <p style={{fontSize:'20'}}>FAQ</p>
     <div>
    <Accordion style={{border:'none'}} >
    
{askedquestion.map((faq,index)=>(
    
<Accordion.Item eventKey={index.toString()} style={{border:'none',boxShadow:'none', backgroundColor:'none'}}>
 
        <Accordion.Header>{faq.ques}</Accordion.Header>
        <Accordion.Body>
         {faq.ans}
        </Accordion.Body>
      </Accordion.Item>
         
    
))}
</Accordion>
<Button variant='none' style={{color:'blue'}}>View More</Button>
         </div>
         </Container>

  )
}
