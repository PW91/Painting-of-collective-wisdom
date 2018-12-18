import React, { Component } from "react";
import { Container } from "reactstrap";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { itemsActions } from "../modules/items";
import AddItemModal from "../components/organisms/AddItemModal";
import LoadingAlert from "../components/atoms/LoadingAlert";
import MainHeader from "../components/organisms/MainHeader";

class PaintingContainer extends Component {
  state = {
    mobileFlag: false,
    mobileDivider: 1
  };

  componentWillMount() {
    this.checkMobile();
  }

  componentDidMount() {
    const { items } = this.props;

    if (!items.length) {
      this.props.itemsActions.watchGettingItems();
    }

    this.initializeCanvas();
  }

  componentWillReceiveProps({ items }) {
    this.fillCanvas(items);
  }

  checkMobile = () => {
    if (window.innerWidth < 1000) {
      this.setState({
        mobileFlag: true,
        mobileDivider: 3
      });
    }
  };

  initializeCanvas = () => {
    const { mobileDivider } = this.state;
    this.canvas = document.getElementsByClassName("canvas")[0];
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 700 / mobileDivider;
    this.canvas.height = 700 / mobileDivider;
  };

  fillCanvas = items => {
    const { mobileDivider } = this.state;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    items.forEach(item => {
      const { word, color, deg, font, size, x, y } = item;

      this.ctx.globalCompositeOperation = "destination-over";
      this.ctx.font = `${size / mobileDivider}px ${font}`;
      this.ctx.fillStyle = color;
      this.ctx.save();
      this.ctx.textBaseline = "middle";
      this.ctx.textAlign = "center";
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.rotate((deg * Math.PI) / 180);

      let xPosition;
      let yPosition;

      if (x / mobileDivider > 0) {
        xPosition = x / mobileDivider - this.ctx.measureText(word).width / 2;
      } else {
        xPosition = x / mobileDivider + this.ctx.measureText(word).width / 2;
      }

      if (y === 0) {
        yPosition = y / mobileDivider;
      } else if (y > 0) {
        yPosition = y / mobileDivider - size / mobileDivider / 2;
      } else {
        yPosition = y / mobileDivider + size / mobileDivider / 2;
      }

      this.ctx.fillText(word, xPosition, yPosition);
      this.ctx.restore();
    });
  };

  prepareItemRandomness = word => {
    const deg = this.getRandomFromRange(-90, 90);
    const size = this.getRandomFromRange(5, 200);

    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const font = "Font_" + Math.floor(this.getRandomFromRange(0, 49));

    const x = this.getRandomFromRange(
      -this.canvas.width / 2,
      this.canvas.width / 2
    );
    const y = this.getRandomFromRange(
      -this.canvas.height / 2,
      this.canvas.height / 2
    );

    return {
      word,
      color,
      x,
      y,
      deg,
      size,
      font
    };
  };

  addItem = word => {
    const randomizedObj = this.prepareItemRandomness(word);
    this.props.itemsActions.watchPostingItem(randomizedObj);
  };

  getRandomFromRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  render() {
    const { items, loadingFlag } = this.props;
    const itemsLength = items.length;

    return (
      <Container>
        <MainHeader counter={itemsLength} />
        <div className="art__wrap">
          <div className="art">
            <div className="canvas__wrap">
              <LoadingAlert loadingFlag={loadingFlag} />
              <canvas className="canvas" />
            </div>
            <AddItemModal addItem={this.addItem} />
          </div>
        </div>
      </Container>
    );
  }
}

PaintingContainer.propTypes = {
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
)(PaintingContainer);
