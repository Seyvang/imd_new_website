import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Link from "next/link";
import About from "../components/About";
import HeadNav from "../components/Navbar";
import TopPic from "../components/TopPic";
import { Container } from "react-bootstrap";
// import Submission from '../components/Submission';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Container id="start" className="justify-content-center">
        <h1 className="text-center">A Member of Genesis Biotechnology Group</h1>
        <br></br>
        <h1 className="text-center">About Us</h1>
        <p>
          The Institute of Metabolic Disorders (IMD) focuses on drug discovery
          for the treatment of lipid-dependent fatty liver disease (NAFLD/NASH).
          The Institute will strive to become a respected leader in the field of
          metabolic disease treatment. Our goal is to increase the quality of
          life for individuals with metabolic pathologies associated with loss
          of liver function.
        </p>
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
