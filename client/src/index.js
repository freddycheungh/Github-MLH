import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import StandardContainer from "Components/StandardContainer";
import store from "./store";

// REMOVE FOR PRODUCTION
module.hot.accept();

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={StandardContainer} />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById("content")
);