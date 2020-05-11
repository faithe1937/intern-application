import React, { useState } from "react";
import "./Child.css";

function Child(props) {
  return (
    <div className='color-container'>
      <div style={{ background: props.color }} className='color-box'>
        box
      </div>
    </div>
  );
}

export default Child;
