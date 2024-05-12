## D&D CHARACTER

    // Se basa en un juego de Dungeons & Dragons en el que cada jugador tiene que generar un personaje con el que jugar.
    Las habilidades del personaje se determinan tirando dados de 6 caras, el problema es crear los dados para realizar el juego, con habilidades basicas de codificacion se da la solucion a crear la simulacion de los dados.

    Este personaje tiene, entre otras cosas, seis habilidades; fuerza, destreza,      constitución, inteligencia, sabiduría y carisma.

    Puntos de vida iniciales son 10+ que segun el modificador se vaya constituyendo un personaje diferente.

## DESCRIPCIÓN

      - [import React, { useState } from 'react';]

        -< Se importa React y la función useState desde la biblioteca React. >

      - [const rollDice = (): number => Math.floor(Math.random() * 6) + 1; ]

        -< rollDice es una función que simula el lanzamiento de un dado de 6 caras. Retorna un número aleatorio entre 1 y 6.>

      - [const generateAbilityScore = (): number => {
        const diceThrows = [rollDice(), rollDice(), rollDice(), rollDice()];
         diceThrows.sort((a, b) => b - a);
        return diceThrows[0] + diceThrows[1] + diceThrows[2];
        };]
          -<generateAbilityScore es una función que genera un puntaje de habilidad. Lanza cuatro dados de 6 caras, los ordena de mayor a menor, y luego suma los tres valores más altos.>

      - [const calculateConstitutionModifier = (constitution: number): number => Math.floor((constitution - 10) / 2); ]

          -<calculateConstitutionModifier es una función que calcula el modificador de constitución basado en el puntaje de constitución. El modificador se calcula restando 10 del puntaje de constitución y dividiendo el resultado por 2, redondeando hacia abajo.>

    - [const calculateHitPoints = (constitutionModifier: number): number => 10 + constitutionModifier; ]

          -<calculateHitPoints es una función que calcula los puntos de golpe basados en el modificador de constitución. Los puntos de golpe se calculan sumando 10 al modificador de constitución.>

    - [const generateCharacter = (): Record<string, number> => {...}]

                -<generateCharacter es una función que no toma argumentos y retorna un objeto. Este objeto tiene claves de tipo string y valores de tipo number.>

    - [  const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];]

                -<Aquí creamos un arreglo llamado abilities que contiene los nombres de las habilidades de un personaje en D&D.>

    - [  const character: Record<string, number> = {}; ]

                -<character es un objeto que utilizaremos para almacenar las estadísticas del personaje que estamos generando. Inicialmente lo inicializamos como un objeto vacío.>

    - [  abilities.forEach((ability) => {
          character[ability] = generateAbilityScore();
          }); ]

                -<Un bucle forEach para iterar sobre cada habilidad en el arreglo abilities. Para cada habilidad, generamos un puntaje de habilidad utilizando la función generateAbilityScore y lo almacenamos en el objeto character, utilizando el nombre de la habilidad como clave.>

      - [  const constitution = character['Constitution'];
           const constitutionModifier = calculateConstitutionModifier(constitution);
           character['Constitution Modifier'] = constitutionModifier;
           character['Hit Points'] = calculateHitPoints(constitutionModifier);]

                -< Se obtiene el puntaje de constitución del objeto character y calculamos el modificador de constitución y los puntos de golpe utilizando las funciones calculateConstitutionModifier y calculateHitPoints respectivamente. Estos valores se agregan al objeto character.>

      - [  return character;
        };]

                -< Retornamos el objeto character completo, que contiene todas las estadísticas del personaje generado. Este objeto contendrá las seis habilidades con sus respectivos puntajes, el modificador de constitución y los puntos de golpe.>

        -<generateCharacter es una función que genera un personaje completo. Genera un puntaje de habilidad para cada una de las seis habilidades (Fuerza, Destreza, Constitución, Inteligencia, Sabiduría y Carisma), calcula el modificador de constitución y los puntos de golpe, y devuelve un objeto que representa al personaje con todas estas estadísticas.>

    - [const CharacterGenerator: React.FC = () => {]

        -<CharacterGenerator es un componente de función de React. Está definido como una función flecha sin argumentos.>

    - [  const [character, setCharacter] = useState<Record<string, number> | null>   (null); ]

        -<character: Es un estado local del componente que representa el personaje actualmente generado. setCharacter es una función que permite actualizar este estado. Se inicializa como null porque no hay ningún personaje generado al principio.>

    -[  const generateNewCharacter = () => {
      const newCharacter = generateCharacter();
      setCharacter(newCharacter);
      };]

          -<generateNewCharacter: Es una función que se encarga de generar un nuevo personaje. Llama a la función generateCharacter para crear un nuevo personaje y luego actualiza el estado character con el nuevo personaje generado utilizando setCharacter.>

    - [  return (
    <div>
      <h1>D&D Character Generator</h1>
      <button onClick={generateNewCharacter}>Generate Character</button> ]

            -<Dentro del retorno del componente, tenemos un <div> que contiene el título del generador de personajes y un botón que, cuando se hace clic, llama a la función generateNewCharacter para generar un nuevo personaje>

    - [      {character && (
        <div>
          <h2>Generated Character</h2>
          <ul>
            {Object.entries(character).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}]

            -<Una expresión condicional (&&) para condicionalmente renderizar un bloque de JSX solamente si character no es null. Si character tiene un valor, se renderiza un <div> que muestra las estadísticas del personaje generado.>

            -<Utilizamos Object.entries(character) para obtener un array de pares clave-valor de las estadísticas del personaje, y luego utilizamos map para renderizar cada par como un <li> en una lista desordenada <ul>. Cada elemento de la lista muestra el nombre de la estadística como una etiqueta <strong> y el valor de la estadística.>


    - [    </div>
        );};
        export default CharacterGenerator;]

            -<El componente CharacterGenerator se exporta como el componente predeterminado del archivo, lo que permite que sea importado y utilizado en otros archivos.>
