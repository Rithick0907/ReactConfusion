import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navi from "./component/NavigationBar";
import Menu from "./component/Menu";
import DISHES from "./shared/dishes";

function App() {
  return (
    <div>
    <Navi />
    <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
