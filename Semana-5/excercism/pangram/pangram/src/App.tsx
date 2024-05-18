import React, { useState } from "react";

const Pangram: React.FC = () => {
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState("");

  const checkPangram = () => {
    const usedLetters = new Set<string>();
    for (const letter of sentence.toLowerCase()) {
      if (letter >= "a" && letter <= "z") {
        usedLetters.add(letter);
      }
    }

    if (usedLetters.size === 26) {
      setResult("It is a pangram!");
    } else {
      setResult("It is not a pangram.");
    }
  };

  return (
    <div>
      <h1>Pangram Checker</h1>
      <input
        type="text"
        placeholder="Enter a sentence"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <button onClick={checkPangram}>Check</button>
      <p>{result}</p>
    </div>
  );
};
export default Pangram;
