import React, { useState } from "react";

const Example4: React.FC = () => {
  // Type error: Type 'undefined' is not assignable to type 'number'.
  const [count, setCount] = useState<number>();

  return (
    <div onClick={() => setCount((prev) => (prev || 0) + 1)}>
      Count: {count}
    </div>
  );
};

export default Example4;
//Correction
//const [count, setCount] = useState<number>(0);
