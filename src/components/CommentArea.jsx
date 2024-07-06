import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item className="border border-primary">
          Bel film
        </ListGroup.Item>
        <ListGroup.Item className="border border-primary">
          Mi sono spaventato moltissimo!
        </ListGroup.Item>
        <ListGroup.Item className="border border-primary">
          Film privo di suspance
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default CommentArea;
