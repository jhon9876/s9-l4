import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import books from "../books/fantasy.json";
class AllTheBooks extends Component {
  render() {
    console.log(books);
    return (
      <Container>
        <Row className="gx-5 gy-5">
          {books.map((libro) => {
            return (
              <Col key={libro.asin} lg={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text>{libro.category}</Card.Text>
                      <Card.Text>Price: {libro.price}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
