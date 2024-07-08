import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NGVmYjJiNWMyMDAwMTUyNzFmYmUiLCJpYXQiOjE3MjA0NTYzOTQsImV4cCI6MTcyMTY2NTk5NH0.Kq5ouCuci_KTRFb2lD5viKjW1GcAsQrBl_uDWL4Lc6Y",
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
        <br />
        <AddComment Asin={this.props.Asin} />
      </>
    );
  }
}

export default CommentArea;
