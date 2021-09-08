import React, { Component } from 'react';
// import React, { useState } from 'react';
import './Lightswitch.css';

class Lightswitch extends Component {
    state = { on: true };

    toggle = () =>
    {
        let isOn = this.state.on;
        this.setState({ on: !isOn });
 
    }
  render() {
    let wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <div className="switch-plate">
          <div className="screw" />
          <div className="switch" onClick={this.toggle}>
            <div className="switch-handle" />
          </div>
          <div className="screw" />
        </div>
      </div>
    );
  }
}

export default Lightswitch;
