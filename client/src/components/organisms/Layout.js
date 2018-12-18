import React, { Component } from "react";

import FontsSampler from "../atoms/FontsSampler";
import MainFooter from "./MainFooter";

export default class Layout extends Component {
  render() {
    return (
      <div className="app">
        <FontsSampler />
        <div className="wrap">{this.props.children}</div>
        <MainFooter />
      </div>
    );
  }
}
