import React, { Component } from "react";
import { Container } from "reactstrap";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AddItemModal from "../components/organisms/AddItemModal";
import { itemsActions } from "../modules/items";
import LoadingAlert from "../components/atoms/LoadingAlert";

class PageContainer extends Component {
  componentDidMount() {
    this.canvas = document.getElementsByClassName("canvas")[0];
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 700;
    this.canvas.height = 700;

    const { items } = this.props;

    if (!items.length) {
      this.props.itemsActions.watchGettingItems();
    }
  }

  componentWillReceiveProps({ items }) {
    this.drawCanvas(items);
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  drawCanvas(items) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    items.forEach(item => {
      const { word, color, deg, font, size, x, y } = item;

      this.ctx.globalCompositeOperation = "destination-over";
      this.ctx.font = `${size}px ${font}`;
      this.ctx.fillStyle = color;

      let xPosition;
      let yPosition;

      if (x > 0) {
        xPosition = x - this.ctx.measureText(word).width / 2;
      } else {
        xPosition = x + this.ctx.measureText(word).width / 2;
      }

      if (y === 0) {
        yPosition = y;
      } else if (y > 0) {
        yPosition = y - size / 2;
      } else {
        yPosition = y + size / 2;
      }

      this.ctx.save();
      this.ctx.textBaseline = "middle";
      this.ctx.textAlign = "center";
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.rotate((deg * Math.PI) / 180);

      this.ctx.fillText(word, xPosition, yPosition);
      this.ctx.restore();
    });
  }

  addItem = word => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const x = this.getRandomArbitrary(
      -this.canvas.width / 2,
      this.canvas.width / 2
    );
    const y = this.getRandomArbitrary(
      -this.canvas.height / 2,
      this.canvas.height / 2
    );
    const deg = this.getRandomArbitrary(-90, 90);
    const size = this.getRandomArbitrary(5, 200);
    const font = "Font_" + Math.floor(this.getRandomArbitrary(0, 24));

    const obj = {
      word,
      color,
      x,
      y,
      deg,
      size,
      font
    };

    this.props.itemsActions.watchPostingItem(obj);
  };

  render() {
    const { items, loadingFlag } = this.props;
    const itemsLength = items.length;

    return (
      <div className="container__wrap">
        <Container>
          <div className="text__wrap">
            <h1>
              PAINTING OF
              <br />
              COLLECTIVE WISDOM
            </h1>
            <p>
              You are looking at the painting. Painting of collective wisdom.
              Currently it contains {itemsLength} items. Everyone can co-create
              it. Even you. You choose word or phrase. Everything else is done
              automatically. Just remember: it will stay on the web forever. So
              try to be nice.
            </p>
          </div>
          <div className="frame__wrap">
            <div className="inside">
              <div className="canvas__wrap">
                <LoadingAlert loadingFlag={loadingFlag} />
                <canvas className="canvas" />
              </div>
              <AddItemModal addItem={this.addItem} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

PageContainer.propTypes = {
  items: propTypes.array.isRequired,
  loadingFlag: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.items.items,
  loadingFlag: state.items.loadingFlag
});

const mapDispatchToProps = dispatch => ({
  itemsActions: bindActionCreators(itemsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
