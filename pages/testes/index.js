import HeadNav from "../../components/Navbar";
import TopPic from "../../components/TopPic";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Image from "next/image";

function Testes() {

  return (
    <>
      <Container id="start" className="justify-content-center">
        <Image
          width={100}
          height={100}
          src="https://via.placeholder.com/150"
          alt="rig1_staining"
        />
      </Container>
    </>
  );
}
export default Testes;
