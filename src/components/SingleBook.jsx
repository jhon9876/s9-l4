import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    widthImage: "w-25",
  };

  render() {
    console.log(this.state.selected);

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={this.props.Libri[0].img} />
              <Card.Body>
                <Card.Title>{this.props.Libri[0].title}</Card.Title>

                <Button
                  variant="primary"
                  onClick={() => {
                    this.setState({ selected: true });
                  }}
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            {this.state.selected && (
              <CommentArea Asin={this.props.Libri[0].asin} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
