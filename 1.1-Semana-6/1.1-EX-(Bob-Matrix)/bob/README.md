## BOB

La app se basa en un adolescente indeferente, el cual responde de manera desinterasada y limitada.
Se debe tener en cuenta cuando se ingrese un mensaje para Bob:

## Descripción

Si el mensaje tiene ¿? este responde Seguro.
Si le gritan y todo con mayuscula responde Vaya relajate.
Si le gritas una pregunta responde Calmate, se lo que estoy haciendo.
Si le das su silencio este responde Buen ser de esa manera.

## Componente

- Se importan respectivamente la biblioteca de React
  - import React, { useState } from "react";

* Definición del componente Bob:
  const Bob: React.FC = () => {...}

  - const [response, setResponse] = useState<string>("");

  * response: Almacena la respuesta de Bob.
  * setResponse: Función para actualizar response.
  * El estado inicial es una cadena vacía "".

    - Función para manejar la entrada del usuario:
      const handleInput = (input: string) => {...}
      - Definimos una función handleInput que toma una cadena de texto input como parámetro.

  - if (!input.trim()) {
    setResponse("¡Bien ser de esa manera!");
    } - Condición 1: Si input está vacío o contiene solo espacios en blanco (!input.trim()), actualiza response a "¡Bien ser de esa manera!".

  - else if (input === input.toUpperCase() && input.trim().endsWith("?")) {
    setResponse("¡Cálmate, sé lo que estoy haciendo!");
    } - Condición 2: Si input está completamente en mayúsculas y termina con un signo de interrogación (input === input.toUpperCase() && input.trim().endsWith("?")), actualiza response a "¡Cálmate, sé lo que estoy haciendo!".

  - else if (input === input.toUpperCase()) {
    setResponse("¡Vaya, relájate!");
    } - Condición 3: Si input está completamente en mayúsculas (input === input.toUpperCase()), actualiza response a "¡Vaya, relájate!".

        * else if (input.trim().endsWith("?")) {

    setResponse("Seguro.");
    } - Condición 4: Si input termina con un signo de interrogación (input.trim().endsWith("?")), actualiza response a "Seguro.".

        * else {

    setResponse("Lo que sea.");
    }

          - Condición 5: Para cualquier otra entrada, actualiza response a "Lo que sea.".

# Return

        * <input

type="text"
placeholder="Escribe algo a Bob..."
onChange={(e) => handleInput(e.target.value)}
/>

- Un input de tipo texto con un placeholder y un evento onChange que llama a la función handleInput con el valor del campo de entrada cada vez que el usuario escribe algo.

  - <p>{response}</p>

    - Muestra la respuesta de Bob en un párrafo (p). El contenido del párrafo es el valor actual de response.
