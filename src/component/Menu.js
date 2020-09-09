import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Media } from "react-bootstrap";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id}>
          <Media as="li">
            <img
              width={64}
              height={64}
              className="ml-3 mr-3 mt-5 border"
              src={dish.image}
              alt="Generic placeholder"
            ></img>
            <Media.Body>
              <h5 className="mt-5">{dish.name}</h5>
              <p>{dish.description}</p>
            </Media.Body>
          </Media>
        </div>
      );
    });
    return (
      <Container>
        <Row>
          <ol className="list-unstyled">{menu}</ol>
        </Row>
      </Container>
    );
  }
}
export default Menu;
