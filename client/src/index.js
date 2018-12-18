import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/organisms/Layout";
import PageView from "./views/PageView";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
          <Route path="/page" component={PageView} />
        </Layout>
      </Switch>
    </Router>
  </Provider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
