import React, { useState } from "react";
import "./Child.css";

function Child({ color, setColor, setInterval }) {
  const [revealMagic, setRevealMagic] = useState(true);
  const fortunes = {
    slateblue: "ASK AGAIN LATER",
    slategrey: "CANNOT PREDICT NOW",
    silver: "MOST LIKELY",
    indigo: "MY SOURCES SAY NO",
    orchid: "YES, DEFINITELY",
    darkslateblue: "WITHOUT A DOUBT",
    purple: "AS I SEE IT, YES",
  };

  const randomObject = () => {
    const colors = [
      "slateblue",
      "slategrey",
      "silver",
      "indigo",
      "orchid",
      "darkslateblue",
      "purple",
    ];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
  };

  const toggleBall = () => setRevealMagic(!revealMagic);
  if (!revealMagic) {
    randomObject();
  } else {
    setInterval(100);
  }
  return (
    <div
      style={{ background: `linear-gradient(${color}, black)` }}
      className='container'>
      <div className='heading'>MAGIC 8 BALL</div>
      <div className='ball'>
        <div className='inner-circle' />
        <div className='text'>{fortunes[color]}</div>
      </div>
      <div className='edit-container'>
        <button onClick={toggleBall}>
          {!revealMagic ? "REVEAL THE MESSAGE" : "SEEKING ADVICE"}
        </button>
      </div>
    </div>
  );
}

export default Child;
