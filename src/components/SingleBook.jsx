import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    widthImage: "w-25",
  };
  render() {
    return (
      <Card
        onClick={() => {
          {
            if (this.state.selected) {
              this.setState({ widthImage: "w-50" });
            }
          }
        }}
      >
        <Card.Img
          className={this.state.widthImage}
          variant="top"
          src={this.props.Libri[0].img}
        />
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
    );
  }
}

export default SingleBook;
