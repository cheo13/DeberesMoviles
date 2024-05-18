# 10 errores comunes de los princpiantes en React con los Hooks

## ERROR 1: No usar el array de dependencias en useEffect correctamente

- Error común: Olvidar pasar un array de dependencias a useEffect, lo que causa que el efecto se ejecute en cada render.
  - Esto significa que el efecto (la console.logdeclaración) se ejecutará en cada representación del componente, independientemente de si el countestado ha cambiado o no.
- Solución: Pasar un array de dependencias a useEffect, incluyendo cualquier variable que pueda cambiar y que afecte al efecto.
  - Explicación de cambios:
    Matriz de dependencia vacía: en []el useEffectgancho indica que el efecto solo debe ejecutarse una vez, específicamente cuando se monta el componente. Esto se debe a que no hay dependencias enumeradas, por lo que el efecto no se volverá a ejecutar a menos que alguna de las dependencias (que actualmente no son ninguna) cambie.

## ERROR 2: No limpiar efectos en useEffect

- Error común: No limpiar efectos secundarios que pueden causar fugas de memoria.

  - Cuando un componente se desmonta (es decir,Es.,se elimina del DOM),cualquier efecto secundario que cree debe limpiarse para evitar pérdidas de memoria y comportamientos no deseados.
    En este caso,el cronómetro creado porsetIntervaldebe detenerse cuando el componente se desmonta.

- Corrección:
  Para garantizar una limpieza adecuada,se devuelve una función deluseEffectGancho.Esta función se ejecutará cuando el componente se desmonte,permitiéndonos borrar el intervalo

- Explicación de cambios:

Función de limpieza:EluseEffectHook ahora devuelve una función que llamaclearInterval(timer)para detener el temporizador cuando el componente se desmonte.

## Error 3: Usar hooks dentro de condicionales

- React Hooks tiene reglas específicas que deben seguirse para garantizar un comportamiento consistente y predecible.

* Error común: Colocar hooks dentro de condicionales, lo que rompe las reglas de hooks.

  Problemas comunes: - Actualizaciones de estado inconsistentes: Si se llama a un Hook dentro de un condicional, su ejecución dependerá de que la condición sea verdadera o falsa. Esto puede generar actualizaciones de estado inconsistentes y dificultar el razonamiento sobre el comportamiento del componente. - Orden de renderizado impredecible: React se basa en un orden específico para renderizar componentes y actualizar el estado. - Violación de las reglas de los ganchos: las reglas de los ganchos establecen explícitamente que los ganchos no deben llamarse dentro de condicionales, bucles u otras estructuras anidadas.

      Solucion: Para evitar estos problemas, siempre llamar a Hooks fuera de las declaraciones condicionales.

  - Recordar,Los ganchos están diseñados para usarse de manera consistente y estructurada para garantizar la integridad de la administración del estado de su aplicación.

## Error 4: No inicializar el estado con un valor correcto

- Error común: Inicializar el estado con un valor incorrecto, especialmente cuando se usa TypeScript.

  - Cuando no se proporciona un valor inicial durante la inicialización del estado,dejándolo como undefined.Esto provoca un error de tipo porque TypeScript espera count ser un número,pero actualmente no está definido.

    - Correción:

  - Se debe especificar un valor inicial para el count estado al usar useState.ya que el count debe ser un número, se inicializa a 0:

    - Explicación de cambios:

    * Valor inicial:El useState<number>(0)ahora proporciona un valor inicial explícito de 0 hacia count estado.Esto asegura que count es siempre un número y evita errores tipográficos.

## Error 5: No declarar los tipos de Hooks

- TypeScript requiere declarar los tipos de las variables y funciones. Al usar Hooks, es importante declarar los tipos correctos para obtener los beneficios de la tipificación y evitar errores de compilación.

  - Enfoque incorrecto

    - Utilizando useState sin especificar los tipos para la count variable de estado y la setCount función de actualización. Esto está provocando un error de tipo porque TypeScript necesita saber qué tipos de datos representan estas variables.

  - Enfoque correcto

    - Para solucionar este problema y habilitar la inferencia de tipos adecuada, debe declarar los tipos de count y setCount cuándo se utilize useState

  - Explicación de cambios
    - Declaración de tipo: ahora useState<number>(0)declara explícitamente que countes una variable de estado de tipo number. Este medio countsólo puede contener valores numéricos.
    - Inferencia de tipos: TypeScript infiere quesetCountes una función que toma un número como argumento y actualiza elcountestado,que también es un número.Esto garantiza la seguridad del tipo al utilizarsetCount.

## Error 6: No usar inferencia de tipos

- TypeScript permite inferir tipos a partir de su uso. En algunos casos, no es necesario declarar explícitamente los tipos, ya que TypeScript puede inferirlos a partir del valor inicial o de cómo se usa la variable.

  - No es necesario declarar explícitamente los tipos de data y setData, ya que TypeScript puede inferirlos a partir del valor inicial.

  - Enfoque correcto

    - Se inicializa data variable de estado con un objeto que contiene name y age propiedades.Dado que TypeScript puede inferir los tipos a partir del valor inicial,no es necesario declarar explícitamente los tipos de data y setData.

  - La inferencia de tipos se usa en ciertos casos pero no todos pues el tipado es el arma fuerte de TS en cuanto a la codificacion y es la mejor practica de emplearla.

  - Beneficios de la inferencia de tipos:
    - Texto estándar reducido: no es necesario declarar explícitamente los tipos de datay setData, lo que hace que el código sea más conciso y legible.
    - Comprobación automática de tipos: TypeScript aún realiza comprobaciones de tipos basadas en los tipos inferidos, lo que garantiza la seguridad de los tipos sin anotaciones adicionales.

## Error 7: Manipular el DOM directamente

- Error común: Modificar el DOM directamente en vez de a través de React.

  - React es un marco reactivo declarativo, este describe el estado de la interfaz de usuario y React maneja la representacion del DOM en consecuencia.

  - Consiste en manipular directamente elementos DOM utilizando metodos imperativos como innerHTML.

- Enfoque correcto

  - Variable de estado: Se introduce una variable de estado denominada content para contener el contenido que se mostrará.
  - Actualización de estado: el useEffectgancho se utiliza para actualizar el contentestado con el valor "Actualizado mediante estado".La matriz de dependencia vacía garantiza que esta actualización se realice solo una vez en el montaje.
  - Renderizado: El contenido del estado se muestra en el DOM utilizando el JSX.

    <Recordar,Las referencias están destinadas a casos de uso limitados y no deberían ser una forma principal de actualizar la interfaz de usuario.>

## Error 8: Usar useEffect para lógica que debería estar en el render

- Error común: Poner lógica de render en useEffect en lugar de en el cuerpo del componente.

Razonamiento:

- Re-renderizaciones innecesarias: Cuando se coloca la lógica de renderizado en useEffect, se activa una nueva renderización del componente después de cada ejecución de efecto, incluso si el estado no ha cambiado. Esto puede generar una sobrecarga de rendimiento innecesaria.
- Complicado de leer: La lógica de renderizado se mezcla con la lógica de efecto, lo que hace mas dificil razonar sobre el codigo.

* Enfoque correcto
  - La solución corregida aprovecha el hecho de que el doubleCount valor debe calcularse en función del count estado actual y no requiere efectos secundarios ni dependencias externas. Por lo tanto,lo mejor es calcularlo directamente dentro del cuerpo del componente
  - Esto evita las re-renderizaciones innecesarias y hace que el código sea más fácil de leer y entender.
  - Recuerda esto useEffect puede activar re-renderizaciones incluso cuando el estado no ha cambiado si incluye dependencias en la matriz que no han cambiado.Utilizar la matriz de dependencia con prudencia para optimizar las reproducciones.

## Error 9: No manejar correctamente las actualizaciones de estado derivadas

- Error común: No manejar correctamente el estado que depende de otros estados.

- El problema con el código original es que useEffectla [count]matriz de dependencia puede actualizarse derivedCounten función de un valor anterior de countdespués de que el usuario hace clic en el botón.
- Esto puede generar inconsistencias en las que derivedCountno refleja el countvalor más reciente debido a la naturaleza asincrónica de las actualizaciones de estado en React.

- Enfoque correcto
  <Garantizar derivedCount que siempre se calcule en función del count valor más reciente>
- Si el cálculo dederivedCount es simple y no requiere ninguna lógica compleja,se lo puede colocar directamente en la función de renderizado.
- Si el cálculo es más complejo o implica lógica adicional,luego usando una dependencia funcional en useEffect se puede implementar de manera mas compleja.

## Error 10: Usar valores en el estado que no son necesarios

- Error común: Guardar valores en el estado que se pueden calcular durante el render.

- La filteredItems variable de estado se usa para almacenar la lista filtrada de elementos según el filter valor. Sin embargo, esta filteredItems actualización de estado se puede evitar por completo.

- Enfoque correcto

  - La filterItemsfunción se elimina porque ya no es necesaria.
  - La items.filter((item) => item > filter) expresión filtra directamente los items de matriz según el filter valor dentro de la map función.

- Beneficios de evitar estados innecesarios:
  - Re-renderizaciones reducidas: El componente no se vuelve a renderizar innecesariamente cuando filterItemscambia el estado.
  - Optimización del rendimiento: Este enfoque conduce a un mejor rendimiento al minimizar las actualizaciones de estado y las reproducciones.
  - Código más simple: el código se vuelve más limpio y más fácil de entender al eliminar la lógica de administración de estado innecesaria.

RESUMEN

La implementacion de Hooks en la destion de estado y los efectos secundarios en los componentes funcionales es una ventaja ofreciendo un enfoque potente e intuitivo.
Sin embargo, es importante tener en cuenta los errores comunes que se pueden cometer al usar Hooks para evitar problemas de rendimiento y mantenimiento.
Al evitar estos errores, se puede obtener un código más limpio, más fácil de leer y de entender, y con un mejor rendimiento.
