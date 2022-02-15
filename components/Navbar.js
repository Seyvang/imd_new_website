import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/Image";

function HeadNav() {
    const logo_source = "/../public/assets/logo_imd.png"
  return (
    <div>
      <Navbar fixed="top" expand="lg" bg="primary">
        <Container className="bg-primary">
          <Link href="/">
            <Navbar.Brand href="#home">
              <Image
                width={60}
                height={30}
                // layout="responsive"
                src="/../public/assets/logo_imd.png"
                alt="rig1_staining"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <Link href="/about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
              <Link href="/publications" passHref>
                <Nav.Link>Publications</Nav.Link>
              </Link>
              <Link href="/projects" passHref>
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
        </Container>
      </Navbar>
      <br></br>
    </div>
  );
}

export default HeadNav;
