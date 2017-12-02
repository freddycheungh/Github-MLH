import React from "react";
import ReactDOM from "react-dom";
import MainScene from "Components/MainScene";

// REMOVE FOR PRODUCTION
module.hot.accept();

ReactDOM.render((
  <MainScene />
  ),
  document.getElementById("content")
);