import React from "react";
import ReactDOM from "react-dom";
import Console from "./Console";

const consoleLog = function (element) {
  return ReactDOM.render(<Console />, element);
};

window.React = React;
window.ReactDOM = ReactDOM;
window.consoleLog = consoleLog;
export default consoleLog;
