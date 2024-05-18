import React, { useState } from "react";

const calculatePoints = (x: number, y: number): number => {
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); // Calculate distance from center

  if (distance > 10) {
    return 0; // Outside the target
  } else if (distance > 5) {
    return 1; // Outer circle
  } else if (distance > 1) {
    return 5; // Middle circle
  } else {
    return 10; // Inner circle
  }
};

const Darts: React.FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [points, setPoints] = useState(0);

  const handleThrow = () => {
    const newPoints = calculatePoints(x, y);
    setPoints(newPoints);
  };

  return (
    <div>
      <h1>Darts Score Calculator</h1>
      <label htmlFor="x">X-Coordinate:</label>
      <input
        type="number"
        id="x"
        value={x}
        onChange={(e) => setX(parseFloat(e.target.value))}
      />
      <label htmlFor="y">Y-Coordinate:</label>
      <input
        type="number"
        id="y"
        value={y}
        onChange={(e) => setY(parseFloat(e.target.value))}
      />
      <button onClick={handleThrow}>Throw!</button>
      <p>Points Earned: {points}</p>
    </div>
  );
};

export default Darts;
