import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";


export default class App extends Component {
  c = "Varun";
  render() {
    return <div>
      <NavBar />
      <News pageSize={8} />


    </div>;
  }
}
