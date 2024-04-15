# Colores de Resistencias

Esta es una aplicación simple de Excercism en React que muestra una lista de colores de resistencias.

## Descripción

El archivo `App.tsx` contiene el código fuente de la aplicación. 

1. `import React from 'react';`: Esta línea importa la biblioteca React que se requiere para crear componentes de React.

2. `const resistorColors: string[] = [...]`: Declara una matriz de cadenas de caracteres llamada `resistorColors` que contiene los nombres de los colores de las resistencias.

3. `const App: React.FC = () => {`: Define el componente de React llamado `App`. Este componente muestra una lista de colores de resistencias.

**React.FC es un tipo de interfaz genérica en React que significa "Functional Component" (Componente Funcional). Esta interfaz proporciona un tipo genérico para definir componentes funcionales en React.

4. `return ( ... );`: Devuelve un JSX que representa la estructura del componente. Se devuelve un `<div>` con un encabezado `<h1>` y una lista `<ul>` que muestra los colores de las resistencias utilizando la función `map()` para generar los elementos `<li>`.

5. `export default App;`: Exporta el componente `App` para que pueda ser importado y utilizado en otros archivos de la aplicación.

