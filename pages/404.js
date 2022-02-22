import { Container } from "react-bootstrap";
import HeadNav from '../components/Navbar';
import Maps from '../components/Maps'
function Home() {
  return (
    <>
      <Container id="start" className="justify-content-center pt-5">
        <h1 className="text-left">
          404 Error: That page does not exist. Check the URL and try again.
        </h1>
      </Container>
      <br></br>
      {/* <div id='explain'>
        <About/>
      </div>
      <div id='ending'>
        <Footer/>
      </div> */}
    </>
  );
}

Home.getLayout = (page) => {
    return (
        <>
            <HeadNav />
            {page}
        </>
    )
  
};

export default Home