import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`);

    setCount(count + 1);

    console.log(`after setState: ${count}`);
  }

  return <div onClick={increment}>I was clicked {count}</div>;
}

export default Counter;
