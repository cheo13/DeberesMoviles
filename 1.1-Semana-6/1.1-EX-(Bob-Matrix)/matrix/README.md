## Matriz

El algoritmo se trata de una cadena que representa una matriz de numeros, devuelve las filas y columnas de esa matriz.

- El algoritmo debe:
  Una lista de las filas, leyendo cada fila de izquierda a derecha mientras se mueve de arriba a abajo a través de las filas,
  Una lista de las columnas, leyendo cada columna de arriba a abajo mientras se mueve de izquierda a derecha.

## Descripción

-import React, { useState } from 'react'; : Importa la biblioteca React y la función useState de React Hooks.

- Se define un tipo para el resultado de la matriz que incluye filas y columnas.

type MatrixResult = {
rows: number[][]; // Las filas de la matriz
columns: number[][]; // Las columnas de la matriz
};

- Función para convertir una cadena de texto en una matriz y sus columnas correspondientes

const parseMatrix = (matrix: string): MatrixResult => {...} - Esta función toma una cadena de texto que representa una matriz y la convierte en un objeto MatrixResult.

- Se divide la cadena en filas y luego en numeros.
  const rows = matrix

  .trim() // Elimina espacios en blanco al principio y al final
  .split("\n") // Divide la cadena en un array de filas

  .map((row) => row.trim().split(/\s+/).map(Number)); // map(...): Procesa cada fila.

  - split(/\s+/): Divide la fila en elementos usando cualquier cantidad de espacios en blanco como separador.

  -map(Number): Convierte cada elemento en un número.

- Se transpone las filas para obtener las columnas.

const columns = rows[0].map((\_, colIndex) =>
rows.map((row) => row[colIndex])
);

- rows[0].map((\_, colIndex) => ...): Itera sobre cada índice de columna.

- rows.map((row) => row[colIndex]): Crea una nueva columna tomando el elemento correspondiente de cada fila.

- Devolvemos un objeto con las filas y las columnas
  return { rows, columns };
  };

## Componente

-Componente principal de la aplicación

    const App: React.FC = () => {..}

- Estado para almacenar la cadena de la matriz

  const [matrixString, setMatrixString] = useState<string>(
  "9 8 7\n5 3 2\n6 6 7"
  );

  - matrixString: Almacena la cadena de texto de la matriz.
  - setMatrixString: Función para actualizar matrixString.

- Valor inicial de la matriz para identificar la escritura de la matriz.

- Estado para almacenar el resultado de la matriz:
  const [matrixResult, setMatrixResult] = useState<MatrixResult | null>(null);

  - matrixResult: Almacena el resultado de la conversión de la matriz.

  - setMatrixResult: Función para actualizar matrixResult.
  - Estado inicial es null.

- Función para manejar la conversión de la cadena a matriz:
  const handleParseMatrix = () => {
  setMatrixResult(parseMatrix(matrixString)); - Convierte la cadena y actualiza el estado
  }; - handleParseMatrix que actualiza matrixResult llamando a parseMatrix con matrixString.

        * <textarea

  value={matrixString}
  onChange={(e) => setMatrixString(e.target.value)}
  rows={5}
  cols={30}
  style={{ display: "block", marginBottom: "10px" }}
  />

- Textarea para ingresar la cadena de la matriz.
- value: Ligado al estado matrixString.
- onChange: Actualiza matrixString cuando el usuario cambia el valor.

  - <button onClick={handleParseMatrix}>Parse Matrix</button>

  * Botón para ejecutar la conversión de la matriz cuando se haga clic.

  - {matrixResult && (...)}

    - matrixResult no es null, muestra las filas y columnas:

      Mapea matrixResult.rows y matrixResult.columns para mostrar cada fila y columna respectivamente.

      - matrixResult.rows.map((row, rowIndex) => ...): Itera sobre las filas, pasando la fila (row) y el índice de la fila (rowIndex) a la función de flecha.

  <div key={rowIndex}>{row.join(", ")}</div>: Para cada fila, crea un div:
  key={rowIndex}: Usa rowIndex como clave única para cada div, lo que ayuda a React a identificar cada elemento de forma única y eficiente.

  {row.join(", ")}: Convierte la fila de un array de números a una cadena de texto, con los números separados por comas.

  - {matrixResult.columns.map((column, colIndex) => (
    <div key={colIndex}>{column.join(", ")}</div>
    ))}

    - matrixResult.columns.map((column, colIndex) => ...): Itera sobre las columnas, pasando la columna (column) y el índice de la columna (colIndex) a la función de flecha.

      <div key={colIndex}>{column.join(", ")}</div>: Para cada columna, crea un div:
      key={colIndex}: Usa colIndex como clave única para cada div.

      {column.join(", ")}: Convierte la columna de un array de números a una cadena de texto, con los números separados por comas.
