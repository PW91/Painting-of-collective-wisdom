import React, { Component } from "react";
import { Alert } from "reactstrap";
import propTypes from "prop-types";

class ErrorAlert extends Component {
  render() {
    const { errorFlag, errorMsg } = this.props;

    if (errorFlag) {
      return <Alert color="danger">{errorMsg}</Alert>;
    } else {
      return <React.Fragment />;
    }
  }
}

ErrorAlert.propTypes = {
  errorFlag: propTypes.bool.isRequired,
  errorMsg: propTypes.string
};

export default ErrorAlert;
