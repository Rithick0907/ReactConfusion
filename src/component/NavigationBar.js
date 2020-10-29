import React, { Component } from "react";
import {Navbar,NavbarBrand} from "reactstrap";
class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
        return(<Navbar
          dark color="primary"
          onSelect={(selectedKey) => alert(`selected {selectedKey}`)}
        >
          <div className="container">
            <NavbarBrand href="#">Ristorante Con fusion</NavbarBrand>
          </div>
        </Navbar>
    );
  }
}
export default NavigationBar;
