import React, { useState } from "react";

const rollDice = (): number => Math.floor(Math.random() * 6) + 1;

const generateAbilityScore = (): number => {
  const diceThrows = [rollDice(), rollDice(), rollDice(), rollDice()];
  diceThrows.sort((a, b) => b - a);
  return diceThrows[0] + diceThrows[1] + diceThrows[2];
};

const calculateConstitutionModifier = (constitution: number): number =>
  Math.floor((constitution - 10) / 2);

const calculateHitPoints = (constitutionModifier: number): number =>
  10 + constitutionModifier;

const generateCharacter = (): Record<string, number> => {
  const abilities = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  const character: Record<string, number> = {};

  abilities.forEach((ability) => {
    character[ability] = generateAbilityScore();
  });

  const constitution = character["Constitution"];
  const constitutionModifier = calculateConstitutionModifier(constitution);
  character["Constitution Modifier"] = constitutionModifier;
  character["Hit Points"] = calculateHitPoints(constitutionModifier);

  return character;
};

const CharacterGenerator: React.FC = () => {
  const [character, setCharacter] = useState<Record<string, number> | null>(
    null
  );

  const generateNewCharacter = () => {
    const newCharacter = generateCharacter();
    setCharacter(newCharacter);
  };

  return (
    <div>
      <h1>D&D Character Generator</h1>
      <button onClick={generateNewCharacter}>Generate Character</button>
      {character && (
        <div>
          <h2>Generated Character</h2>
          <ul>
            {Object.entries(character).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterGenerator;
