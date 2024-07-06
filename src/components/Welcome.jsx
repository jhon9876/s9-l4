import { Component } from "react";
import { Alert } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <Alert variant="danger">
        <Alert.Heading>EpiShop</Alert.Heading>
      </Alert>
    );
  }
}

export default Welcome;
