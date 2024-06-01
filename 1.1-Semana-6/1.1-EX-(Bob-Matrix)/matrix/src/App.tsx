import React, { useState } from "react";

type MatrixResult = {
  rows: number[][];
  columns: number[][];
};

const parseMatrix = (matrix: string): MatrixResult => {
  const rows = matrix
    .trim()
    .split("\n")
    .map((row) => row.trim().split(/\s+/).map(Number));

  const columns = rows[0].map((_, colIndex) =>
    rows.map((row) => row[colIndex])
  );

  return { rows, columns };
};

const App: React.FC = () => {
  const [matrixString, setMatrixString] = useState<string>(
    "9 8 7\n5 3 2\n6 6 7"
  );
  const [matrixResult, setMatrixResult] = useState<MatrixResult | null>(null);

  const handleParseMatrix = () => {
    setMatrixResult(parseMatrix(matrixString));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Matrix Parser</h1>
      <textarea
        value={matrixString}
        onChange={(e) => setMatrixString(e.target.value)}
        rows={5}
        cols={30}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button onClick={handleParseMatrix}>Parse Matrix</button>
      {matrixResult && (
        <div style={{ marginTop: "20px" }}>
          <h2>Rows</h2>
          {matrixResult.rows.map((row, rowIndex) => (
            <div key={rowIndex}>{row.join(", ")}</div>
          ))}
          <h2>Columns</h2>
          {matrixResult.columns.map((column, colIndex) => (
            <div key={colIndex}>{column.join(", ")}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
