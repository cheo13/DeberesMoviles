import React, { useState } from 'react';

const planetOrbitalPeriods: Record<string, number> = {
  Mercury: 0.2408467, Venus: 0.61519726, Earth: 1.0, Mars: 1.8808158,
  Jupiter: 11.862615, Saturn: 29.447498, Uranus: 84.016846, Neptune: 164.79132,
};

const secondsInEarthYear: number = 31557600;

const App = () => {
  const [ageInSeconds, setAgeInSeconds] = useState<number>(0);
  const [selectedPlanet, setSelectedPlanet] = useState<string>('Earth');
  
  const calculateAge = (): string => ((ageInSeconds / secondsInEarthYear) / planetOrbitalPeriods[selectedPlanet]).toFixed(2);
  
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAgeInSeconds(parseInt(e.target.value));
  const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlanet(e.target.value);

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>Age in Seconds: <input type="number" value={ageInSeconds} onChange={handleAgeChange} /></label>
      <label>Select Planet:
        <select value={selectedPlanet} onChange={handlePlanetChange}>
          {Object.keys(planetOrbitalPeriods).map(planet => <option key={planet} value={planet}>{planet}</option>)}
        </select>
      </label>
      <p>Age on {selectedPlanet}: {calculateAge()} Earth-years old</p>
    </div>
  );
};

export default App;
