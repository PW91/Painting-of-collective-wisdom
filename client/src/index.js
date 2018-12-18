import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";

import Layout from "./components/organisms/Layout";
import PaintingView from "./views/PaintingView";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

const runReactApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route path="/" component={PaintingView} />
          </Layout>
        </Switch>
      </Router>
    </Provider>,
    root
  );
};

WebFont.load({
  custom: {
    families: [
      "Font_0",
      "Font_1",
      "Font_2",
      "Font_3",
      "Font_4",
      "Font_5",
      "Font_6",
      "Font_7",
      "Font_8",
      "Font_9",
      "Font_10",
      "Font_11",
      "Font_12",
      "Font_13",
      "Font_14",
      "Font_15",
      "Font_16",
      "Font_17",
      "Font_18",
      "Font_19",
      "Font_20",
      "Font_21",
      "Font_22",
      "Font_23",
      "Font_24",
      "Font_25",
      "Font_26",
      "Font_27",
      "Font_28",
      "Font_29",
      "Font_30",
      "Font_31",
      "Font_32",
      "Font_33",
      "Font_34",
      "Font_35",
      "Font_36",
      "Font_37",
      "Font_38",
      "Font_39",
      "Font_40",
      "Font_41",
      "Font_42",
      "Font_43",
      "Font_44",
      "Font_45",
      "Font_46",
      "Font_47",
      "Font_48",
      "Font_49"
    ]
  },
  active() {
    runReactApp();
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
