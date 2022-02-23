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
        <h1 className="text-center">This is the About Page</h1>
        <p>
          Sint minim velit occaecat dolore nostrud proident incididunt minim
          laboris dolore fugiat ex. Mollit sint deserunt culpa consequat et
          exercitation voluptate Lorem id. Et nulla laborum ipsum consectetur
          minim exercitation amet proident mollit et culpa duis. Minim nulla
          ipsum aliqua minim excepteur ipsum magna quis.
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
