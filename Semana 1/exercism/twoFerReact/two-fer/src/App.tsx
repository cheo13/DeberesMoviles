import React from 'react';

function App() {
  let friendName: string = 'Alice';
  let dialogue: string;

  if (friendName !== 'Do-yun') {
    dialogue = `One for ${friendName}, one for me.`;
  } else {
    dialogue = 'One for you, one for me.';
  }

  return (
    <div>
      <h1>Cookie Sharing</h1>
      <p>{dialogue}</p>
    </div>
  );
}

export default App;
