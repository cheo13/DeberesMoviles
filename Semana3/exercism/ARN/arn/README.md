 ## RNA TRANSCRIPTION

 Esta aplicación de Excercism en React con TS .Determina el complemento de ARN de una secuencia de ADN determinada.

 ## Descripción

  -Importamos la biblioteca de React y la función 'useState' como Hooks que gestionara el estado del componente.
  
  {import React, { useState } from 'react';}

  const dnaToRna = (dnaSequence: string): string => { 
  -Declara una función que toma una secuencia de ADN como argumento y devuelve una secuencia de ARN.

  const complementMap: { [key: string]: string } = { ... };: 
  -Declara un mapa de complementos que mapea cada nucleotido del ADN a su correspondiente nucleotido en ARN.

  return dnaSequence.split('').map(nucleotide => complementMap[nucleotide]).join('');
  -Convierte la secuencia de ADN en un array de caracteres, luego mapea cada nucleótido al complemento correspondiente en ARN utilizando 'complementMap', por ultimo ** Une los caracteres resultantes en una cadena de ARN ***-

 ## Componente Funcional RnaSearch

  * const RnaSearch: React.FC = () => {: Declara un componente funcional de React llamado App.

  *const [dnaSequence, setDnaSequence] = useState<string>('');: Define un estado dnaSequence y una función setDnaSequence para actualizar ese estado utilizando el hook useState. El estado inicial es una cadena vacía.

  *const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };: Define una función para manejar cambios en el input de la secuencia de ADN. Actualiza el estado dnaSequence con el valor introducido por el usuario.

  *const handleConvertToRna = () => { ... };: Define una función para manejar la conversión de la secuencia de ADN a ARN. Utiliza la función dnaToRna para obtener la secuencia de ARN y muestra una alerta con el resultado.

  ## Bloque estructura JSX del componente RnaSearch

    return ( : Inicio del bloque a retornar indicando lo que se va a renderizar.

    <div className="RnaSearch"> : Envuelve todo el contenido del componente.

    <h1>... Se agrega encabezado.

    <input
  type="text"
  placeholder="Enter DNA sequence"
  value={dnaSequence}
  onChange={handleInputChange}
/>
: Se crea un unput donde el usuario puede ingresar la secuencia de ADN que se usara para el ejercicio.
  -Se vincula el valor del input con  el estado "dnaSequence" del componente y se asigna la función 'handleInputChange' como manejador de event 'onChange' que se activa cada vez que el usuario modifica el input.

  * <button onClick={handleConvertToRna}>Convert</button>
: Crea un botón que al ser presionado llama a la función handleConvertToRna. 

  * Por final cierra el div, y retorna.
  -Se esporta la el Componente Funcional RnaSearch












