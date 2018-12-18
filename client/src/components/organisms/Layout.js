import React, { Component } from "react";
import FontsSampler from "../atoms/FontsSampler";
import floorImg from "../../assets/images/floor.jpg";

export default class Layout extends Component {
  render() {
    return (
      <div className="app">
        <div className="desktop__wrap">
          <FontsSampler />
          <div className="wrap">{this.props.children}</div>
          <img src={floorImg} alt="floor" className="floor-img" />
        </div>
        <div className="mobile__wrap">
          <h1>Visit on desktop!</h1>
        </div>
      </div>
    );
  }
}
