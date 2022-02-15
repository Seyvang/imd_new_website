import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import About from '../components/About';
import HeadNav from '../components/Navbar';
import TopPic from '../components/TopPic';
import {Container} from 'react-bootstrap';
// import Submission from '../components/Submission';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Container id='start' className='justify-content-center'>
        <h1 className='text-center'>A Subset of Genesis Biotechnology Group</h1>
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
