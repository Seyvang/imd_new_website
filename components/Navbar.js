import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo_imd.png";
import genesis_logo from "../public/assets/genesis_logo.png";
import styles from './Navbar.module.css'

function HeadNav() {
  // const logo_source = "./../public/assets/logo_imd.png"
  return (
    <div>
      <Navbar fixed="top" expand="lg" bg="primary">
        <Container className="bg-primary">
          <Link href="/" passHref>
            <Navbar.Brand href="#home">
              <Image
                width={60}
                height={30}
                // layout="responsive"
                src={logo}
                alt="rig1_staining"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link href="/publications" passHref>
                <Nav.Link>Publications</Nav.Link>
              </Link>
              <Link href="/newprojects" passHref>
                <Nav.Link>Projects</Nav.Link>
              </Link>
              <Link href="/members" passHref>
                <Nav.Link>Members</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link>Contact</Nav.Link>
              </Link>
              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="https://genesisbiotechgroup.com/" className='flew-row-reverse'>
                <Image
                  width={60}
                  height={30}
                  // layout="responsive"
                  src={genesis_logo}
                  alt="rig1_staining"
                  className={styles.genesis_logo}
                />
              </Navbar.Brand>
        </Container>
        
      </Navbar>
      <br></br>
    </div>
  );
}

export default HeadNav;
