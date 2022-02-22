import React from 'react'
import {Container} from 'react-bootstrap';
import Maps from '../../components/Maps'
function Contact() {
  
  return (
    <>
      <Container id='start' className='justify-content-center'>
      <h1>Contact Us!</h1>
          <h2>Institute of Metabolic Disorders <br/>
              1000 Waterview Drive <br/>
              Hamilton, NJ 08690 </h2>   

      </Container>
      <Maps></Maps>
      <br></br>
    </>
  )
}

export default Contact
