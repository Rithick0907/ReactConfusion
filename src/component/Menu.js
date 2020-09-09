import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card, Col, Button, CardGroup } from "react-bootstrap";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelected(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish !== null) {
      return (
        <Card>
          <Card.Img src={dish.image} alt={dish.name} />
          <Card.Body>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Text>{dish.description}</Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Col key={dish.id} md={5}>
          <Card onClick={() => this.onDishSelected(dish)}>
            <Card.Img src={dish.image} />
            <Card.ImgOverlay>{dish.name}</Card.ImgOverlay>
          </Card>
        </Col>
      );
    });
    return (
      <Container>
        <Row>{menu}</Row>
        <Row>
          <Col>{this.renderDish(this.state.selectedDish)}</Col>
        </Row>
      </Container>
    );
  }
}
export default Menu;
