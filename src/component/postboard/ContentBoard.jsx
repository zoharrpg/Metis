import React from "react";
import { Card,Button, Container  } from 'react-bootstrap'
import './content.css';


const ContentBoard  = (props) =>{
    return(

        <>
     
        <Container className='mt-5' style={{display: 'flex', justifyContent: 'center'}}>
    <Card className="text-center " style={{width:'80rem'}}>
  <Card.Header as ="h3">POST TITLE</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Container>

</>

    );
};

export default ContentBoard;
