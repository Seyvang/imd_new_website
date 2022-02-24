import HeadNav from "../../components/Navbar";
import TopPic from "../../components/TopPic";
import { Container } from "react-bootstrap";
import React from 'react'
import dynamic from 'next/dynamic'

function Testes() {
  const LeafletMaps = React.useMemo(() => dynamic(() => 
    import("../../components/Map"), {
    loading: () => <p>Map is loading</p>,
    ssr: false
  }), [])

  return (
    <>
      <Container id="start" className="justify-content-center">
        <LeafletMaps/>
      </Container>
    </>
  );
}
export default Testes;
