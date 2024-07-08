import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  salvaCommenti = (dati) => {
    console.log(dati);
    dati.map((date) => {
      this.state.commenti.push(date.comment);
    });
  };

  componentDidMount() {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.Asin}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NTA0MjJiNWMyMDAwMTUyNzFmYmYiLCJpYXQiOjE3MjAyNzUyMzMsImV4cCI6MTcyMTQ4NDgzM30.mkdm6Fdqgq7s2uaYGQZ_JuMeHReKJWe6lYr7rcwMcZ8",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((dati) => {
        this.salvaCommenti(dati);
      })
      .catch((err) => {
        console.log("errore: ", err);
      });
  }

  render() {
    return (
      <>
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

        <CommentsList recensioni={this.state.commenti} />
      </>
    );
  }
}

export default CommentArea;
