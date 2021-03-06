import React from "react";
import { Container, Card, CardGroup, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { members } from "../../data/members.js";

function MemberPage({ data }) {
  // const openProfile = () => {
  //   console.log("working")
  // }
  return (
    <>
      <Container id="start" className="justify-content-center">
        <h1>Our Members</h1>
        <p>
          Our employees come from diverse backgrounds in scientific knowledge.
          With over 15 years, the group pursues excellence in finding new discoveries
          in metabolic disorders and pathways.
        </p>
        <>
          <Row xs={1} md={2} lg={4} className="g-4 p-1">
            {data.map((member) => {
              return (
                <Card key={member.id}>
                  <Link href={`/members/${member.id}`} passHref>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                      className={styles.profilePic}
                      // onClick={openProfile()}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.position}</Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer> */}
                </Card>
              );
            })}
          </Row>
        </>
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const listofmembers = members;
  // const data = await listofmembers.json()
  // console.log(data)
  return {
    props: {
      data: listofmembers,
    },
  };
}

// be able to click on the user and see the CV
export default MemberPage;
