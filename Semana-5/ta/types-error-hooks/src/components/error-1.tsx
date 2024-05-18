import React, { useEffect, useState } from "react";

const Example1: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This runs on every render");
  });

  return <div onClick={() => setCount(count + 1)}>Count: {count}</div>;
};

export default Example1;
//Correction
// useEffect(() => {
//   console.log("This runs only on mount");
// }, []);
