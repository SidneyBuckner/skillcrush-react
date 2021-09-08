import React, { Component } from "react";

const Switch = (props) => (
  <div className="switch-plate" onClick={props.toggle}>
    <div className="screw" />
    <div className="switch">
      <div className="switch-handle" />
    </div>
    <div className="screw" />
  </div>
);

export default Switch;
