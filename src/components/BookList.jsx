import { Card, Col, Container, Row } from "react-bootstrap";
import SingleItem from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  render() {
    // console.log(this.props.BooksArray);
    return (
      <Container fluid>
        <Row>
          {this.props.BooksArray.map((single) => {
            return (
              <Col key={single.asin}>
                <SingleItem imgLink={single.img} imgTitle={single.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
