import React, { Component } from "react";
import propTypes from "prop-types";

class LoadingAlert extends Component {
  render() {
    const { loadingFlag } = this.props;

    if (loadingFlag) {
      return (
        <div className="loading__wrap">
          <h4 className="h4">Loading...</h4>
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
