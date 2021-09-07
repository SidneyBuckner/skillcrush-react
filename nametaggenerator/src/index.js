import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import { namelist } from "./data";
import "./index.css";

const renderNameTag = (aName) => (
  <NameTag name={aName.firstname} key={aName.id} />
);

const App = () => {
  const nameTagElements = namelist.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {nameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
