import React from 'react';

const resistorColors: string[] = [
  'Black', 'Brown', 'Red', 'Orange', 'Yellow',
  'Green', 'Blue', 'Violet', 'Grey', 'White'
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Resistor Colors</h1>
      <ul>
        {resistorColors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
