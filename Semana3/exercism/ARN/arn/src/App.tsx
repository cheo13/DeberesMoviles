import React, { useState } from 'react';

const dnaToRna = (dnaSequence: string): string => {
  const complementMap: { [key: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  return dnaSequence.split('').map(nucleotide => complementMap[nucleotide]).join('');
};

const RnaSearch: React.FC = () => {
  const [dnaSequence, setDnaSequence] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDnaSequence(e.target.value);
  };

  const handleConvertToRna = () => {
    const rnaSequence = dnaToRna(dnaSequence);
    alert(`The RNA complement of ${dnaSequence} is: ${rnaSequence}`);
  };

  return (
    <div className="RnaSearch">
      <h1>DNA to RNA Converter</h1>
      <input
        type="text"
        placeholder="Enter DNA sequence"
        value={dnaSequence}
        onChange={handleInputChange}
      />
      <button onClick={handleConvertToRna}>Convert</button>
    </div>
  );
};

export default RnaSearch;
