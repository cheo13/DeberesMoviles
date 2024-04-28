## Leap

La aplicación web trata sobre cuando se produce un año bisiesto en el calendario gregoriano.

Un año es bisiesto si es divisible por 4 para 100 y 400.

## Descripción

-import React, { useState } from 'react'; : Importa la biblioteca React y la función useState de React Hooks.

-const isLeapYear = (year: number): boolean => {...}: Se define una función llamada isLeapYear que toma un año como argumento y devuelve un booleano indicando si el año es bisiesto o no, siguiendo las reglas del enunciado.

  * if (year % 4 === 0) {.}: Verifica si el año es divisible por 4 sin dejar un residuo. Si es así, significa que el año puede ser un año bisiesto.

  *     if (year % 100 === 0) {.}: Si el año es divisible por 4, se verifica si también es divisible por 100. Si lo es, podría no ser un año bisiesto, a menos que también sea divisible por 400.

  *       return year % 400 === 0;
: Si el año es divisible por 100 y también por 400, entonces es un año bisiesto y la función devuelve true.

*     return true;
  }
  return false;: Se retorna  false si no cumple con las condiciones anteriores.

## Componente

- const LeapYear: React.FC = () => {
} : Define el componente principal llamado  "LeapYear" que utiliza la interfaz de componentes funcionales.

  *  const [inputYear, setInputYear] = useState<number>(0);
  const [isLeap, setIsLeap] = useState<boolean | null>(null);
: Crea dos estados utilizando el hook useState, uno para guardar el valor del input, mientras que 'isLeap' guarda si el año es bisiesto o no. Se inicia null xq no tiene ninguna comprobación.

  *   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputYear(parseInt(e.target.value));
  };

-Se define una función handleInputChange que actualiza el estado inputYear con el valor del año ingresado por el usuario en el input.

  *   const handleCheckLeapYear = () => {
    setIsLeap(isLeapYear(inputYear));
  };

    - Se define una función handleCheckLeapYear que determina si el año ingresado es bisiesto o no utilizando la función isLeapYear, y actualiza el estado isLeap con el resultado.

    * return (): 
    <div  ... : Se retorna la estructura del componente LeapYear .

        - type="number": Especifica el tipo de entrada que se espera del usuario.
        - placeholder="Enter a year" :  Proporciona un texto de marcador de posición dentro del input.

        -value={inputYear}: El atributo value establece el valor actual del input. En este caso, inputYear es una variable de estado que almacena el año ingresado por el usuario. 

        - onChange={handleInputChange}: El atributo onChange especifica la función que se llamará cada vez que el usuario cambie el valor del input. Se establece en handleInputChange, que es una función que actualiza el estado inputYear con el nuevo valor ingresado por el usuario.

        - <button onClick={handleCheckLeapYear}>Check</button>: es un botón que el usuario puede hacer clic para verificar si el año ingresado es un año bisiesto. El evento onClick está vinculado a la función handleCheckLeapYear, lo que significa que cuando el usuario haga clic en el botón, se ejecutará la función handleCheckLeapYear.

        - {isLeap !== null && (
  <p>{isLeap ? `${inputYear} is a leap year!` : `${inputYear} is not a leap year.`}</p>
)}: 

-Esto establece una condición para renderizar el siguiente fragmento de JSX solamente si isLeap no es null. Si isLeap es null, no se renderizará nada.
<p>{isLeap ? ${inputYear} is a leap year!:${inputYear} is not a leap year.}</p>: Dentro del párrafo (`.

* exportamos el componente:
export default LeapYear;
