import React from "react";
import { Container } from "react-bootstrap";
import Maps from "../../components/Maps";
import dynamic from 'next/dynamic'

function Contact() {
  const LeafletMaps = React.useMemo(
    () =>
      dynamic(() => import("../../components/Map"), {
        loading: () => <p>Map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <>
      <Container id="start" className="justify-content-center">
        <h1>Contact Us!</h1>
        <br></br>
        <h3>Email</h3>
        <h6>jnickels@mdlab.com</h6>
        <br></br>
        <h3>Address</h3>
        <h6>
          Institute of Metabolic Disorders <br />
          1000 Waterview Drive <br />
          Hamilton, NJ 08690{" "}
        </h6>
        <LeafletMaps/>
      </Container>
      
      <br></br>
    </>
  );
}

export default Contact;
