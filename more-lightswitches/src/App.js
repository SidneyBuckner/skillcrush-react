import React, { Component } from "react";
import Switch from "./Switch";

class App extends Component {
  state = { on: false };
  toggle = () => {
    const isOn = this.state.on; // <- this is a variable to hlpe change the state from ture to false
    this.setState({ on: !isOn });
  };
  render() {
    let wallClass = "wall off"; //wallClass is a default variable to help change state from true to false
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <Switch toggle={this.toggle}/>
        <Switch toggle={this.toggle} />
      </div>
    );
  }
}

export default App;

//App.js manages the state of the lightswitches! 
