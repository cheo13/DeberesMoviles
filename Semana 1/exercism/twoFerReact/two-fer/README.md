# Compartiendo Galletas

Esta es una aplicación simple de React que simula compartir galletas con un amigo basado en una condición predefinida.

## Descripción
1
import React from 'react';: Esta línea importa la biblioteca React que se requiere para crear componentes de React.
2
function App() {: Aquí comienza la definición de la función de componente App. Esta función representa nuestro componente de React llamado App.
3
let friendName: string = 'Do-yun';: Declara una variable llamada friendName y la inicializa con el valor 'Do-yun'. La anotación : string indica que esperamos que friendName sea una cadena de caracteres.
4
let dialogue: string;: Declara una variable llamada dialogue sin inicializarla. También se anota como una cadena de caracteres (: string).
5
if (friendName !== 'Do-yun') {: Esta es una estructura de control if que verifica si friendName no es igual a 'Do-yun'.
6
dialogue = One for ${friendName}, one for me.;: Si friendName no es igual a 'Do-yun', asigna a dialogue la cadena de caracteres que contiene el nombre del amigo y "one for me." utilizando interpolación de cadenas.
7
} else {: Si friendName es igual a 'Do-yun', continúa con el bloque else.
8
dialogue = 'One for you, one for me.';: Asigna a dialogue la cadena de caracteres "One for you, one for me.".
9
return ( ... );: Devuelve un JSX que representa la estructura del componente. En este caso, un <div> con un encabezado <h1> y un párrafo <p> que muestra el valor de dialogue.
10
export default App;: Exporta el componente App para que pueda ser importado y utilizado en otros archivos de la aplicación.
