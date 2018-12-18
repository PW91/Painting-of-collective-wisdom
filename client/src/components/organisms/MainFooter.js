import React, { Component } from "react";

import floorImg from "../../assets/images/floor.png";

class MainFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <img src={floorImg} alt="floor" className="floor-img" />

        <div className="copyright__wrap">
          <h6>
            Idea, design &amp; development by{" "}
            <a
              href="http://przemyslaw.codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Przemyslaw Wieteska
            </a>
            .
          </h6>
        </div>
      </footer>
    );
  }
}

export default MainFooter;
