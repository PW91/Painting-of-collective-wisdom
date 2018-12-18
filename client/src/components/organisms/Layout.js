import React, { Component } from "react";

import FontsSampler from "../atoms/FontsSampler";
import MainFooter from "./MainFooter";

export default class Layout extends Component {
  render() {
    return (
      <div className="app">
        <div className="desktop__app">
          <FontsSampler />
          <div className="wrap">{this.props.children}</div>
          <MainFooter />
        </div>
        <div className="mobile__app">
          <h1>Visit on desktop!</h1>
        </div>
      </div>
    );
  }
}
