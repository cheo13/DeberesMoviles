## Resistor Color Code Decoder - Trio

Es una aplicación simple de Excercism en React que muestra listas de colores de las resistencias y su resultado de ohms o kiloohms.

## Descripción

    // Importamos React y la función useState desde la biblioteca 'react'
1. 'import React, { useState } from 'react';'

    // Definimos un array constante llamado COLORS que contiene los nombres de los colores
2. 'const COLORS = ["black", "b..'

    // Definimos una función llamada colorCode que toma un color como entrada y devuelve su índice en el array COLORS
3. 'const colorCode = (color: string): number => COLORS.indexOf(color);'

    // Definimos un componente de función llamado App que representa nuestra aplicación
4. 'const App: React.FC = () => {'

    // Usamos el hook useState para crear dos estados: 'input' para almacenar los colores seleccionados y 'result' para almacenar el resultado de la decodificación
5. 'const [input, setInput] = useState<string[]>(['', '', '']);
    const [result, setResult] = useState<string | null>(null);'

    // Definimos una función llamada handleChange que toma un índice como entrada y devuelve otra función que maneja el cambio de selección en los elementos <select>
6. 'const handleChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {

    // Creamos una copia del array 'input'
7.  'const newInput = [...input];'

    // Actualizamos el valor en la posición 'index' con el valor seleccionado
8.  'newInput[index] = e.target.value;'

    // Actualizamos el estado 'input' con la nueva copia
9.  'setInput(newInput);'

    // Definimos una función llamada handleSubmit que calcula el valor de la resistencia cuando se hace clic en el botón 'Decode'
10. 'const handleSubmit = () => {...'

    // Desestructuramos el array 'input' en 'first', 'second' y 'third'
11. 'const [first, second, third] = input;'

    // Calculamos el valor principal sumando los índices de los colores 'first' y 'second' multiplicados por 10
12. 'const mainValue = colorCode(first) * 10 + colorCode(second);'

    // Calculamos la cantidad de ceros basándonos en el índice del color 'third'
13. 'const zeros = 10 ** colorCode(third);'

    // Creamos una etiqueta de texto que representa la resistencia, dependiendo de la cantidad de ceros
14.'let label = `${mainValue}`;
    if (zeros >= 1000) {
      label = `${mainValue / 1000} kiloohms`;
    } else {
      label = `${mainValue} ohms`;
    }'

15.  // Actualizamos el estado 'result' con la etiqueta de texto calculada
    'setResult(label);'
  
16. // Renderizamos el componente
  return (
    <div>
      {/* Mostramos un encabezado */}
      <h1>Resistor Color Code Decoder - Trio</h1>
      {/* Creamos tres elementos <select> para que el usuario seleccione los colores de las tres bandas del resistor */}
      <select value={input[0]} onChange={handleChange(0)}>
        {/* Mapeamos sobre el array COLORS y creamos una opción para cada color */}
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <select value={input[1]} onChange={handleChange(1)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <select value={input[2]} onChange={handleChange(2)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      {/* Creamos un botón para decodificar los colores seleccionados */}
      <button onClick={handleSubmit}>Decode</button>
      {/* Si hay un resultado, lo mostramos */}
      {result !== null && <p>Resistance: {result}</p>}
    </div>
  );
};

// Exportamos el componente App como el componente predeterminado del módulo
export default App;
