## Resistor Color Duo

Es una aplicación simple de Excercism en React que muestra listas de colores de las resistencias.

## Descripción

El archivo App.tsx contiene el código fuente de la aplicación.

1. 'import React, { useState } from 'react';' 
    
    // Importamos React y la función useState desde la biblioteca 'react'.

2. 'const COLORS = ['black','brown',..'
    
    // Definimos un array constante llamado COLORS que contiene los nombres de los colores

3. 'const colorCode = (color: string): number => COLORS.indexOf(color);'

    // Definimos una función llamada colorCode que toma un color como entrada y devuelve su índice en el array COLORS

4. 'const App: React.FC = () => {...'
    
    // Definimos un componente de función llamado App que representa nuestra aplicación

5. 'const [input, setInput] = useState<string[]>(['', '']);
  const [result, setResult] = useState<number | null>(null);'

    // Usamos el hook useState para crear dos estados: 'input' para almacenar los colores seleccionados y 'result' para almacenar el resultado de la decodificación

6. 'const handleChange = (index: number) => (e: React.        ChangeEvent<HTMLSelectElement>) => {...'

    // Definimos una función llamada handleChange que toma un índice como entrada y devuelve otra función que maneja el cambio de selección en los elementos <select>

7. 'const newInput = [...input];'

    // Creamos una copia del array 'input'

8. ' newInput[index] = e.target.value;'

    // Actualizamos el valor en la posición 'index' con el valor seleccionado

9. ' setInput(newInput);'

    // Actualizamos el estado 'input' con la nueva copia

10. 'const handleSubmit = () => {'

     // Definimos una función llamada handleSubmit que calcula el valor de la resistencia cuando se hace clic en el botón 'Decode'

11. 'const [tens, ones] = input;'

    // Desestructuramos el array 'input' en 'tens' y 'ones'

12. 'setResult(colorCode(tens) * 10 + colorCode(ones));'

    // Calculamos el valor de la resistencia sumando los índices de los colores 'tens' y 'ones' multiplicados por 10

13. Renderizamos el componente y lo retornamos

return (
  <div>
    {/* Mostramos un encabezado */}
    <h1>Resistor Color Code Decoder</h1>
    {/* Creamos dos elementos <select> para que el usuario seleccione los colores de las dos primeras bandas del resistor */}
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
    {/* Creamos un botón para decodificar los colores seleccionados */}
    <button onClick={handleSubmit}>Decode</button>
    {/* Si hay un resultado, lo mostramos */}
    {result !== null && <p>Resistance: {result}</p>}
  </div>
);

// Exportamos el componente App como el componente predeterminado del módulo
export default App;
