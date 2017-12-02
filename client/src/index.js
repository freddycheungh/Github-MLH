import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import StandardContainer from "Components/StandardContainer";

// REMOVE FOR PRODUCTION
module.hot.accept();

ReactDOM.render(
  (
    <BrowserRouter>
      <Route path="/" component={StandardContainer} />
    </BrowserRouter>
  ),
  document.getElementById("content")
);