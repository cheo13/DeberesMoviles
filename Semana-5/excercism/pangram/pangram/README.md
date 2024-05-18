## Pangram

La aplicación web trata sobre descubrir si una oracion es un pangrama

Un pangrama es una oración que utiliza cada letra del alfabeto al menos una vez. No distingue entre mayúsculas y minúsculas, por lo que no importa si una letra está en minúscula (por ejemplo k) o en mayúscula (por ejemplo K).

## Descripción

- import React, { useState } from 'react'; : Importa la biblioteca React y la función useState de React Hooks.

# Componente

- const Pangram: React.FC = () => { ... }

  - Se define un componente funcional llamado Pangram.

- const [sentence, setSentence] = useState("");

  - Se implementa useState para crear dos variables de estado:
    <sentence: Almacena la oracion actual ingresada por el usuario, inicializada en ("")>
    <setSentence: Función para actualizar la variable sentence>

- const [result, setResult] = useState("");

  - Esta linea es similar a la anterior, pero se crea una var de estado llamada result para almacenar el mensaje de verificacion. ("¡Es un pangrama! " o "No es un pangrama ") y una funcion setResult para actualizarlo.

- const checkPangram = () => { ... }

  - Se define una funcion nombrada que se encargara de comprobar si la frase introducida es un pangrama.

- const usedLetters = new Set<string>();

  - Dentro del checkPangram funcion, se crea un conjunto llamado usedLetters.
  - Los conjuntos son una estructura de datos que almacena valores únicos. En este caso, almacenamos las letras que ya hemos sondeado de la oracion.
  - Los conjuntos son muy útiles para comprobar si un valor ya existe en una lista.
  - En este caso, comprobamos si la letra actual ya ha sido sondeada.

- for (const letter of sentence.toLowerCase()) { ... }

  - Esta linea itera sobre cada letra usando 'sentence' un bucle for, convirtiendo 'sentence.toLowerCase()' la oracion completa en minusculas para garantizar la verificacion de la oracion.

- if (letter >= "a" && letter <= "z") { ... }

  - Dentro del bucle esta condicion verifica si la corriente 'letter' esta entre 'a' y 'z'.

- usedLetters.add(letter);

  - Si letteres un carácter alfabético en minúscula válido, se agrega al usedLetters conjunto mediante el addmétodo.

- if (usedLetters.size === 26) { ... }

  - Después de recorrer todas las letras, esta declaración verifica si el tamaño del usedLettersconjunto es igual a 26. Esto indica que se han encontrado las 26 letras del alfabeto en la oración.

- setResult("It is a pangram!");

  - Si se encuentran todas las letras, se llama a la setResultfunción con el mensaje "¡Es un pangrama! " para actualizar la resultvariable de estado.

- else {...}

  - Si el tamaño establecido no es 26, significa que no todas las letras están presentes.
  - En este caso, se llama a la setResultfunción con el mensaje "No es un pangrama " para actualizar la resultvariable de estado.

# Retorno

- return ( ... )

  - Esta línea marca el comienzo del JSX devuelto por el Pangramcomponente. JSX es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro del código.

- <input ... />
  input: Se crea un elemento con los siguientes atributos:

type="text": Especifica que se trata de un campo de entrada de texto.

placeholder="Enter a sentence": Define un texto de marcador de posición que se muestra dentro del campo de entrada cuando está vacío.

value={sentence}: vincula el valor actual de la sentence variable de estado.

- onChange:

Este es un atributo de controlador de eventos adjunto al <input>elemento. Especifica que una función debe ejecutarse siempre que cambie el valor del campo de entrada.

- (e) => {...}:

Esta es una función de flecha, una forma concisa de definir una función en JavaScript. Se necesita un único argumento llamado e, que representa el objeto de evento que desencadenó el onChangeevento.

- setSentence(e.target.value):

  - Dentro de la función de flecha, esta declaración llama a la setSentencefunción, que es la función de actualización de estado para la sentencevariable de estado.
    - <e.target.value: Esta expresión accede al valor del campo de entrada que desencadenó el evento. e.targetse refiere al elemento de entrada en sí y valuees la propiedad que contiene el texto actual ingresado por el usuario.>
