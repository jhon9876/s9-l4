import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup as="ol" numbered>
        {this.props.recensioni.map((recensione, index) => {
          return (
            <ListGroup.Item key={index} as="li">
              {recensione}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;
