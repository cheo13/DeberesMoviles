import React, { useEffect, useState } from "react";

const Example3: React.FC = () => {
  const [count, setCount] = useState(0);

  if (count > 0) {
    useEffect(() => {
      console.log("This will cause an error");
    }, []);
  }

  return <div onClick={() => setCount(count + 1)}>Count: {count}</div>;
};

export default Example3;
//Correction
// useEffect(() => {
//   if (count > 0) {
//     console.log("This is correct");
//   }
// }, [count]);
