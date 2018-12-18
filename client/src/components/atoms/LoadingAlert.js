import React, { Component } from "react";
import propTypes from "prop-types";

class LoadingAlert extends Component {
  render() {
    const { loadingFlag } = this.props;

    if (loadingFlag) {
      return (
        <div className="loading__wrap">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

LoadingAlert.propTypes = {
  loadingFlag: propTypes.bool.isRequired
};

export default LoadingAlert;
