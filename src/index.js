import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import H2App from "./H2App";

function HelloWorldApp() {
  return <h1>Hello World</h1>;
}

function UsefulWebsites() {
  return <h1>Useful Websites</h1>;
}

const H3Section = () => {
  return (
    <div>
      <h3>Which Site do you want to open?</h3>
    </div>
  );
};

ReactDOM.render(<HelloWorldApp />, document.getElementById("root"));
ReactDOM.render(<UsefulWebsites />, document.getElementById("root1"));
ReactDOM.render(<H3Section />, document.getElementById("root2"));
ReactDOM.render(<H2App />, document.getElementById("root3"));
