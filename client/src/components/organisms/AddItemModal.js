import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import propTypes from "prop-types";

import ErrorAlert from "../atoms/ErrorAlert";

class AddItemModal extends Component {
  state = {
    modalOpenFlag: false,
    errorFlag: false,
    errorMsg: null,
    name: ""
  };

  toggleModal = () => {
    this.setState({
      modalOpenFlag: !this.state.modalOpenFlag
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errorFlag: false,
      errorMsg: null
    });
  };

  normalizeValue = value => {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z ]/g, "");
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { addItem } = this.props;
    const word = this.normalizeValue(this.state.name);

    if (word.length > 0 && word.length < 21) {
      addItem(word);
      this.toggleModal();
    } else {
      this.setState({
        errorFlag: true,
        errorMsg: "Validation error!"
      });
    }
  };

  render() {
    return (
      <div className="add-button__wrap">
        <Button color="dark" onClick={this.toggleModal}>
          Co-create
        </Button>
        <Modal isOpen={this.state.modalOpenFlag} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} />
          <ModalBody>
            <h2> Be an artist, add wisdom!</h2>
            <p>Just please:</p>
            <ul>
              <li>Maximum 20 characters</li>
              <li>Without any numbers</li>
              <li>Without any special signs</li>
            </ul>

            <Form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <Label for="item" />
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Your word or phrase"
                  onChange={this.onInputChange}
                />
              </FormGroup>
              <ErrorAlert
                errorFlag={this.state.errorFlag}
                errorMsg={this.state.errorMsg}
              />
              <Button color="dark" block>
                ADD WISDOM
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

AddItemModal.propTypes = {
  addItem: propTypes.func.isRequired
};

export default AddItemModal;
