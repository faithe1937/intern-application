import React, { useState } from "react";
import "./Child.css";

function Child({ color, setColor, setInterval, blink }) {
  let [speed, setSpeed] = useState(1000);
  let [colorTwo, setColorTwo] = useState("white");

  const rando = () => {
    const colors = ["Crimson", "Chocolate", "Coral", "LightSeaGreen"];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
    // color2.push(newColor);
  };

  function handleChange(e) {
    setColorTwo(e.target.value);
  }

  const handleIncrement = () => {
    setInterval(speed + 500);
    setSpeed(speed + 500);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setInterval(speed - 500);
    setSpeed(speed - 500);
  };
  rando();

  return (
    <div
      style={{ background: `linear-gradient(${color}, ${colorTwo})` }}
      className='container'>
      <div className='box'>
        <div className='text'>
          <h2>{color}</h2>
          <h3>{speed}</h3>
          <p>
            <input value={colorTwo} onChange={handleChange} />
            <br />
            <button onClick={() => handleIncrement()}> slower </button>
            <button onClick={() => handleDecrement()}> faster </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Child;
