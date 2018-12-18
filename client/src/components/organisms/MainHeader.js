import React, { Component } from "react";
import propTypes from "prop-types";

class MainHeader extends Component {
  render() {
    const { counter } = this.props;

    return (
      <header className="header">
        <h1 className="h1">
          PAINTING OF
          <br />
          COLLECTIVE WISDOM
        </h1>
        <p className="p">
          You are looking at the painting. Painting of collective wisdom.
          Currently it contains {counter} items. Everyone can co-create it. Even
          you. You choose word or phrase. Everything else is done automatically.
          Just remember: it will stay on the web forever. So try to be nice.
        </p>
      </header>
    );
  }
}

MainHeader.propTypes = {
  counter: propTypes.number.isRequired
};

export default MainHeader;
