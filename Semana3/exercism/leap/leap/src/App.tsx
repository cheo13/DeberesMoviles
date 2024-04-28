import React, { useState } from 'react';

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
};

const LeapYear: React.FC = () => {
  const [inputYear, setInputYear] = useState<number>(0);
  const [isLeap, setIsLeap] = useState<boolean | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputYear(parseInt(e.target.value));
  };

  const handleCheckLeapYear = () => {
    setIsLeap(isLeapYear(inputYear));
  };

  return (
    <div className="LeapYear">
      <h1>Leap Year Checker</h1>
      <input
        type="number"
        placeholder="Enter a year"
        value={inputYear}
        onChange={handleInputChange}
      />
      <button onClick={handleCheckLeapYear}>Check</button>
      {isLeap !== null && (
        <p>{isLeap ? `${inputYear} is a leap year!` : `${inputYear} is not a leap year.`}</p>
      )}
    </div>
  );
};

export default LeapYear;

