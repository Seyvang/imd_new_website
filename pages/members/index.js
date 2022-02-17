import React from "react";
import { Container, Card, CardGroup, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./styles.module.css";

function MemberPage() {
  const test_array = [1, 2, 3, 4, 5];
  return (
    <>
      <Container id="start" className="justify-content-center">
        <h1>This is the Members page</h1>
        {/* <h1 className="text-center">This is the About Page</h1> */}
        <p>
          Sint minim velit occaecat dolore nostrud proident incididunt minim
          laboris dolore fugiat ex. Mollit sint deserunt culpa consequat et
          exercitation voluptate Lorem id. Et nulla laborum ipsum consectetur
          minim exercitation amet proident mollit et culpa duis. Minim nulla
          ipsum aliqua minim excepteur ipsum magna quis.
        </p>
        <>
          <Row xs={1} md={2} lg={4} className="g-4 p-1">
            {test_array.map((num) => {
              return (
                <Card key={num}>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    className={styles.profilePic}
                  />
                  <Card.Body>
                    <Card.Title>Member {num}</Card.Title>
                    <Card.Text>
                      Some spheal about what the guy is
                    </Card.Text>
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

// be able to click on the user and see the CV
export default MemberPage;
