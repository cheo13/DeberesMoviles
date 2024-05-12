# Space-Age

// Se implementara logica de programacion en React TS para crear un algoritmo
que dada una edad en segundos, calcular la edad que tendria alguien estando en otro planeta.

Mercurio: período orbital 0,2408467 años terrestres
Venus: período orbital 0,61519726 años terrestres
Tierra: período orbital 1,0 años terrestres, 365,25 días terrestres o 31557600 segundos
Marte: período orbital 1,8808158 años terrestres
Júpiter: período orbital 11,862615 años terrestres
Saturno: período orbital 29,447498 años terrestres
Urano: período orbital 84,016846 años terrestres
Neptuno: período orbital 164,79132 años terrestres

Siendo una conversion de segundos a dias terrestres que representan los años que un ser humano con tales segundos de vida puede tener en otro planeta.

## Descripción

- [import React, { useState } from 'react';]
  Importamos el hook `useState` desde la biblioteca React. useState es un gancho (hook) que te permite añadir estado a los componentes funcionales en React.

- [const planetOrbitalPeriods: Record<string, number> = {
  Mercury: 0.2408467, Venus: 0.61519726, Earth: 1.0, Mars: 1.8808158,
  Jupiter: 11.862615, Saturn: 29.447498, Uranus: 84.016846, Neptune: 164.79132,
  };
  ] - Esta es una declaración de una constante llamada planetOrbitalPeriods, que es un objeto que mapea nombres de planetas a sus periodos orbitales en años terrestres. - Son de tipo string que contienen un number como periodo orbital.

- [const secondsInEarthYear: number = 31557600;]

  Esta es una declaración de una constante llamada secondsInEarthYear, que representa el número de segundos en un año terrestre.

- [const App = () => { ]

  -Aquí se declara un componente de función llamado App. Los componentes de función son funciones de JavaScript que retornan elementos React.

- [ const [ageInSeconds, setAgeInSeconds] = useState<number>(0);
  const [selectedPlanet, setSelectedPlanet] = useState<string>('Earth'); ]

  -> Estas líneas declaran dos estados utilizando el gancho useState. ageInSeconds representa la edad en segundos y selectedPlanet representa el planeta seleccionado. setAgeInSeconds y setSelectedPlanet son funciones que te permiten actualizar estos estados respectivamente. Se inicializan con valores predeterminados de 0 para ageInSeconds y 'Earth' para selectedPlanet.

- [ const calculateAge = (): string => ((ageInSeconds / secondsInEarthYear) / planetOrbitalPeriods[selectedPlanet]).toFixed(2); ]

  ->Esta función calculateAge calcula la edad en años terrestres en base a la edad en segundos ingresada y el planeta seleccionado.

- [ const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAgeInSeconds(parseInt(e.target.value));

  -<handleAgeChange es una función que recibe un evento de cambio (e) como argumento. Este evento se genera cada vez que el valor del campo de entrada de edad cambia.>

  -<El parámetro e es de tipo React.ChangeEvent<HTMLInputElement>, lo que significa que es un evento de cambio relacionado con un elemento de entrada de tipo <input> en React.>

  -<e.target es una referencia al elemento que disparó el evento, en este caso, el campo de entrada de edad.>

  -<e.target.value es el valor actual del campo de entrada de edad en forma de cadena de texto.>

  -<parseInt(e.target.value) convierte esta cadena de texto en un número entero. Esto es necesario porque el valor de ageInSeconds debe ser un número para que pueda ser actualizado correctamente.>

  -<Finalmente, setAgeInSeconds(parseInt(e.target.value)) actualiza el estado ageInSeconds con el nuevo valor obtenido del campo de entrada. Esto significa que cada vez que el usuario ingresa un nuevo valor en el campo de entrada de edad, se actualiza el estado ageInSeconds con ese nuevo valor, lo que provoca una re-renderización del componente con la nueva edad en segundos.>

  const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlanet(e.target.value); ]

      ->Estas son funciones manejadoras de eventos. handleAgeChange se ejecuta cuando el valor del input de edad cambia y actualiza el estado ageInSeconds con el nuevo valor convertido a un entero. handlePlanetChange se ejecuta cuando el planeta seleccionado cambia y actualiza el estado selectedPlanet con el nuevo valor.

## Bloque de retorno

    - [return (
    <div>
          <h1>Age Calculator</h1>
                    <label>Age in Seconds: <input type="number" value={ageInSeconds} onChange={handleAgeChange} /></label>]

    ->  Aquí se define una etiqueta <label> que contiene un campo de entrada <input>. La etiqueta le indica al usuario qué debe ingresar en el campo de entrada.

        -<El atributo value del campo de entrada está vinculado al estado ageInSeconds, lo que significa que mostrará el valor actual de ageInSeconds. Además, el evento onChange está configurado para llamar a la función handleAgeChange cada vez que el valor del campo de entrada cambie.

    - [      <label>Select Planet:
        <select value={selectedPlanet} onChange={handlePlanetChange}>
          {Object.keys(planetOrbitalPeriods).map(planet => <option key={planet} value={planet}>{planet}</option>)}
        </select>
      </label>]

            ->Aquí hay una etiqueta <label> que contiene un elemento <select>, que es un menú desplegable. La etiqueta le dice al usuario qué está seleccionando. El atributo value del elemento <select> está vinculado al estado selectedPlanet, lo que significa que mostrará el valor actual de selectedPlanet.

               -<El evento onChange está configurado para llamar a la función handlePlanetChange cada vez que se seleccione un planeta diferente en el menú desplegable. Dentro del elemento <select>, estamos mapeando sobre las claves del objeto planetOrbitalPeriods para generar opciones <option> para cada planeta.

      - [      <p>Age on {selectedPlanet}: {calculateAge()} Earth-years old</p>]

            ->  Aquí hay un párrafo <p> que muestra la edad calculada en años terrestres para el planeta seleccionado. Utilizamos expresiones entre llaves {} para incluir variables y llamar a la función calculateAge(), que retorna la edad calculada.

      - [    </div>
      );
         };
          export default App;]

          ->  Finalmente, cerramos el elemento <div> que envuelve todo el contenido retornado por el componente App y asi mismo se exporta por default el componente App.
