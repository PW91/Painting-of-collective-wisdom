import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";

import Layout from "./components/organisms/Layout";
import PageView from "./views/PageView";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

const startReactApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route path="/" component={PageView} />
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
      "Font_24"
    ]
  },
  active() {
    console.log("fonts loaded!");
    startReactApp();
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
