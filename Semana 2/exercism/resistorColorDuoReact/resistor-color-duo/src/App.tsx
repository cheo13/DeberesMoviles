import React, { useState } from 'react';

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const colorCode = (color: string): number => COLORS.indexOf(color);

const App: React.FC = () => {
  const [input, setInput] = useState<string[]>(['', '']);
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newInput = [...input];
    newInput[index] = e.target.value;
    setInput(newInput);
  };

  const handleSubmit = () => {
    const [tens, ones] = input;
    setResult(colorCode(tens) * 10 + colorCode(ones));
  };

  return (
    <div>
      <h1>Resistor Color Code Decoder</h1>
      <select value={input[0]} onChange={handleChange(0)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <select value={input[1]} onChange={handleChange(1)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Decode</button>
      {result !== null && <p>Resistance: {result}</p>}
    </div>
  );
};

export default App;
