import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Navbar
          className="bg-dark"
          onSelect={(selectedKey) => alert(`selected {selectedKey}`)}
        >
          <Nav.Item>Ristorante Con Fusion</Nav.Item>
        </Navbar>
      </Container>
    );
  }
}
export default NavigationBar;
