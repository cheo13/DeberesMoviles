## Crear el estado actual de la producción de un elemento implementando métodos del ciclo de vida.

La aplicación consiste en mostrar el estado actual de un componente mediante el ciclo de vida
como son el Montaje, Actualizacion y Desmontaje.

## Descripción
	##	Archivo:  componentDidMount.tsx

	-Importaciones:
	+Importamos desde 'react' el Component y useState.
	+Importamos los componentes ProductionStatusFunctional y ProductionStatusUnmount desde los archivos en el src.
	
	-Interfaces:
	+ProductionStatusProps: Define propiedades que espera recibir el componente 'ProductionStatus'-
	+ProductionStatusState: Define el estado interno del componente 'ProductionStatus'.

	-Componente: 'ProductionStatus'
	+Es una clase que extiende 'Component' de React.
	+Se define un constructor que inicializa el estado del componente con un mensaje 'Initializing production...'.
	+Método 'componentDidMount', se ejecuta despues de que el componente se monta en el DOM.
		simulando el inicio de produccion luego de 2 segundos mediante 'setTimeout'.
	+Método 'render', muestra el nombre del producto y el estado de produccion.
	
	-Componente: 'ComponentMount'
	+Componente funcional.
	+Usando el hook 'useState' para definir 3 estados, 'productName'(nombre del producto), 'updateMessage'(mensaje actualizacion produccion), 
		'stopProduction'(indica si la produccion esta detenida).
	-Funciones:
	+'handleChangeProductName: Cambia el nombre del producto y muestra el mensaje de actializacion de la produccion.
	+'handleStopProduction: Detiene la produccion al establecer el estado 'stopProduction' en 'true'.

	-Entorno:
	+Renderiza el componente 'ProductionStatusFunctional', pasandole 'productName' como prop.
	+Renderiza un boton para cambiar el nombre del producto, que llama a 'handleChangeProductName'.
	+Renderizar mensaje de actualizacion si esta clikeado.
	+Renderiza el componente 'ProductionStatusUnmount', pasandole 'productName' y 'handleStopProduction' como props.
	+Renderiza el mensaje "Produccion detenida" si 'stopProduction' es true.

	##	Archivo:  componentDidUpdate.tsx

	-Importaciones:
	+Importacion de los hooks 'useEffect' y 'useState' de react.
	
	NOTA: Los hooks son fundamentales porque permiten añadir funcionalidad a efectos secundarios y manejar el estado dentro de componentes funcionales.

	-Interfaz:
	+'ProductionStatusProps': Interfaz que describe la forma de las props que se espera, como 'productName' de tipo string.

	-Componente: 'ProductionStatusFunctional'
	+Componente funcional definido mediante arrow function, toma props de la interfaz definida 'ProductionStatusProps'.
	+Se implementa 'useState' para definir 2 estados locales:
		'productionStatus': Guarda el estado actual de la produccion del producto.
		'updateMessage': Guarda un mensaje de actualizacion que se muestra cuando se esta actualizando la produccion.
	+Usando el hook 'useEffect' para manejar efectos secundarios en el componente.
	+Dentro de 'useEffect' se establece mensaje de actualizacion y configuro un temporizador 'setTimeout', simula un retraso antes que actualice el estado de produccion.
	+Cuando el temp se completa se actualiza el estado de 'productionStatus' a "Production in progress" y eliminando el mensaje de actualizacion.
	+Se devuelve una funcion de limpieza en 'useEffect', se ejefuta para limpiar cualquier recurso que el componente haya creado para evitar fugas de memoria.

	-Interfaz de Usuario:
	+En el retorno del componente, se muestra el nombre del producto y el estado de produccion actual.
	

	##	Archivo:  componentWillUnmount.tsx
	
	-Importaciones: 
	+Importamos 'useEffect' desde react.
	
	-Interfaz 'ProductionStatusProps'
	+'productName': Representa el nombre del producto.
	+'stopProductio': Funcion que se llama al hacer clic en el boton "Stop production", deteniendo la produccion del producto.

	-Componente: 'ProductionStatusUnmount'
	+Componente funcional definido mediante arrow function. Toma las props definidas en la interfaz 'ProductionStatusProps'.
	+Haciendo uso del Hook 'useEffect', ejecuta despues de que el componente se renderiza en el DOM y cada vez que las dependencias especificadas cambia.
	+'useEffect': Se devuelve una limpieza para detener la produccion del producto.

	-Interfaz de usuario:
	+Se muestra un mensaje indicando que la produccion se esta deteniendo.
	+Se renderiza un boton "Stop Production" que llama a la funcion 'stopProduction' cuando se hace clic, permitiendo al usuario detener la produccion del producto.

	
	## Resumen
		
	El ejercicio se representa en 3 etapas del ciclo de vida de un componente en React:
	
	'ComponentMount': Muestra la fase de montaje, donde se inicializan los estados y se integran otros componentes.

	'ProductionStatusFunctional': Es la fase de actualizacion, donde se actualiza el estado del componente.
	
	'ProductionStatusUnmount': En esta fase de desmontaje, se realizan tareas de limpieza antes que el componente se elimine del DOM.

	DOM: Document Object Model
	