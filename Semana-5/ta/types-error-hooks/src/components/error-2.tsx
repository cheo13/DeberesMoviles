import React, { useEffect, useState } from "react";

const Example2: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick");
    }, 1000);

    // No clearInterval here
  }, []);

  return <div onClick={() => setCount(count + 1)}>Count: {count}</div>;
};

export default Example2;
//Correction
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Tick");
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
