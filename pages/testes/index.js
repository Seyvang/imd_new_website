import HeadNav from "../../components/Navbar";
import TopPic from "../../components/TopPic";
import { Container } from "react-bootstrap";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Document, Page } from "react-pdf";

function Testes() {
  return (
    <>
      <Container id="start" className="justify-content-center">
        <Link href="/assets/CVs/Steven Kim.docx">
          <a>
            Link to test document.
          </a>
        </Link>
      </Container>
    </>
  );
}
export default Testes;
