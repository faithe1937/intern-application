import React, { useState } from "react";
import Child from "./Child";
import useInterval from "./useInterval";

function Parent() {
  const [color, setColor] = useState("#4682B4");
  const [blink, setBlink] = useState(null);
  const [interval, setInterval] = useState(1000);

  useInterval(() => setBlink(!blink), interval);

  return (
    <Child
      color={color}
      setColor={setColor}
      blink={blink}
      setInterval={setInterval}
    />
  );
}

export default Parent;
