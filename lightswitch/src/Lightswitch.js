import React, { useState } from 'react';
import './Lightswitch.css';

const Lightswitch = (props) =>
{
    return (<div className={wallClass}>
        <div className="switch-plate">
            <div className="screw" />
            <div className="switch">
                <div className="switch-handle" />
            </div>
            <div className="screw" />
        </div>
    </div>);
}
export default Lightswitch;