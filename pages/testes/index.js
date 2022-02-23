import HeadNav from "../../components/Navbar";
import TopPic from "../../components/TopPic";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Image from "next/image";
import LeafletMaps from "../../components/LeafletMaps";

function Testes() {

  return (
    <>
      <Container id="start" className="justify-content-center">
        <LeafletMaps/>
      </Container>
    </>
  );
}
export default Testes;
