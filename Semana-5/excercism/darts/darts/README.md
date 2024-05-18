## DARTS

La aplicación web trata sobre dar con un dardo al objetivo y segun que tan cerca se posicione el dardo este tendra una puntuacion en base a un plano cartesiano, representando como [0,0] el centro y [10,10] lejania total del objetivo.

## Descripción

- import React, { useState } from 'react'; : Importa la biblioteca React y la función useState de React Hooks.

# Función

- const calculatePoints = (x: number, y: number): number => {// ...};

  - Se define una función denominada calculatePoints que toma dos argumentos y , ambos de tipo , que representan las coordenadas X e Y del punto de aterrizaje del dardo. La función devuelve un valor de tipo , que representa los puntos obtenidos por ese punto de aterrizaje. x y number number

- const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  - 'calculatePointsfunción': Esta línea calcula la distancia entre el punto de aterrizaje del dardo (representado por las coordenadas x y y) y el centro del objetivo (que se supone que está en las coordenadas (0, 0)).
  - Math.sqrtes la función de raíz cuadrada.
  - Math.pow(x, 2)calcula xelevado a la potencia de 2 (es decir , ). x²
  - Math.pow(y, 2)calcula yelevado a la potencia de 2 (es decir , ). y²
  - Sumar x²y y²y sacar la raíz cuadrada usando Math.sqrtnos da la distancia desde el centro.

- if (distance > 10) {...}

  - Esta serie de if-else son las declaraciones que determinan los puntos ganados en función de la distancia calculada desde el centro:
    - Si distance > 10,el dardo aterrizó fuera del objetivo,entonces gana 0 puntos.
    - Si distance > 5,el dardo aterrizó en el círculo exterior,entonces gana 1 punto.
    - Si distance > 1,el dardo aterrizó en el círculo del medio,entonces gana 5 puntos.
    - Si distance <= 1,el dardo aterrizó en el círculo interior,por lo que obtiene la puntuación más alta de 10 puntos.

# Componente

- const Darts: React.FC = () => { // ...};

  - Se define un componente funcional llamado Darts.

- const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [points, setPoints] = useState(0);

  - Estas líneas utilizan eluseStategancho para gestionar el estado del componente:
    - x es una variable de estado para almacenar la coordenada X del punto de aterrizaje del dardo,inicializado con un valor de 0.
    - y es una variable de estado para almacenar la coordenada Y del punto de aterrizaje del dardo,inicializado con un valor de 0.
    - points es una variable de estado para almacenar los puntos ganados para el lanzamiento actual,inicializado con un valor de 0.

- const handleThrow = () => {}

  - Esta línea define una función nombrada handleThrowusando una sintaxis de función de flecha.

- const newPoints = calculatePoints(x, y);

  - Esta línea calcula los puntos obtenidos por el lanzamiento actual.

        * Llama a la calculatePoints función previamente definida.
        * Pasa los valores actuales de las variables de estado x y y(que representan las coordenadas X e Y del punto de aterrizaje) como argumentos de la calculatePoints función.
        * El resultado de la calculatePoints función, que es el número de puntos obtenidos según las coordenadas, se almacena en la newPoints variable.

  setPoints(newPoints);

  - Esta línea actualiza el points variable de estado con los puntos calculados almacenados en newPoints.
    _ setPoints es la función de actualización de estado para el points variable de estado.
    _ Llamando setPoints(newPoints),informamos a React que el 'points' el estado ha cambiado al valor almacenado en newPoints.

# Retorno

- return ( ... )

  - Esta línea marca el comienzo del JSX devuelto por el Pangramcomponente. JSX es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro del código.

- <label htmlFor="x">X-Coordinate:</label>

  - Esta línea crea un labelelemento asociado con el campo de entrada "Coordenada X". El foratributo especifica que esta etiqueta es para el elemento con el ID "x".
  - El texto de la etiqueta "Coordenada X: " se muestra junto al campo de entrada.

- <input ... />

      * Esta línea define un inputelemento con varios atributos:

      * type="number": Esto especifica que el campo de entrada solo puede aceptar valores numéricos.
      * id="x": Esto asigna una ID única "x" al campo de entrada, que se utiliza para conectarlo con la etiqueta correspondiente.
      * value={x}: Esto vincula el valor actual de la xvariable de estado al campo de entrada. Cuando el usuario ingresa un valor, se reflejará en el xestado.
      * onChange={(e) => setX(parseFloat(e.target.value))}: Esto define un controlador de eventos para el onChange evento. Cada vez que cambia el valor en el campo de entrada, se activa esta función.Dentro de la función:
      * e:Esto representa el objeto de evento que contiene información sobre el cambio.
      * e.target.value:Esto accede al valor actual ingresado por el usuario en el campo de entrada.
      * parseFloat(e.target.value):Esto convierte el valor ingresado (que podría ser una cadena) en un número de punto flotante usando parseFloat.
      * setX(newValue):Esto llama la setX Función de actualización de estado para actualizar el x variable de estado con el valor convertido.

- <button onClick={handleThrow}>Throw!</button>

  - Crea unabuttonelemento con el texto "¡Lanza!".ElonClickEl atributo especifica una función que se llamará cuando se haga clic en el botón.

- <p>Points Earned: {points}</p>

  - Crea un elemento de párrafo (<p>) que muestra el valor actual delpointsvariable de estado.Las llaves {} Se utilizan para incorporar el valor de la points variable dentro del texto "Puntos ganados:".
