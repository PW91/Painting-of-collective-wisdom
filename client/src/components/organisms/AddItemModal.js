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

  onFormSubmit = e => {
    e.preventDefault();

    const { addItem } = this.props;

    const word = this.state.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z ]/g, "");

    if (word.length > 0 && word.length < 20) {
      addItem(word);
      this.toggleModal();
    } else {
      this.setState({
        errorFlag: true,
        errorMsg: "Phrase is not valid!"
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
          <ModalHeader toggle={this.toggleModal}>
            Be an artist and add your thing!
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <Label for="item" />
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="max 20 signs, no numbers, no special characters"
                  onChange={this.onInputChange}
                />
              </FormGroup>
              <ErrorAlert
                errorFlag={this.state.errorFlag}
                errorMsg={this.state.errorMsg}
              />
              <Button color="dark" block>
                CO-CREATE
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
