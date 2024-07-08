import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.Asin,
  };
  InviaCommenti = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NGVmYjJiNWMyMDAwMTUyNzFmYmUiLCJpYXQiOjE3MjA0NTYzOTQsImV4cCI6MTcyMTY2NTk5NH0.Kq5ouCuci_KTRFb2lD5viKjW1GcAsQrBl_uDWL4Lc6Y",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          console.log("inviata correttamente");
        }
      })
      .catch((err) => {
        console.log("errore: ", err);
      });
  };
  render() {
    return (
      <Form>
        <Form.Group
          required
          className="mb-3 "
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Inserisci una recensione</Form.Label>
          <Form.Control
            className="border border-primary"
            as="textarea"
            rows={3}
            required
            value={this.state.comment}
            onChange={(e) => {
              this.setState({ comment: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Inserisci Punteggio</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={this.state.rate}
            onChange={(e) => {
              this.setState({ rate: e.target.value });
            }}
          >
            <option value="1">uno</option>
            <option value="2">due</option>
            <option value="3">tre</option>
            <option value="4">quattro</option>
            <option value="5">cinque</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("Recensione inviata");
              this.InviaCommenti();
            }}
          >
            Invia recensione
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddComment;
