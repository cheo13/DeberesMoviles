## Zustand

-Crear un pequeño proyecto que utilice Zustang para manejar el estado de la fábrica , incluyendo la producción y distribución de sus productos.

## Descripcion

Aquí se importa la función create de la librería "zustand", y se definen dos interfaces BearState y BearS que representan el estado y las funciones del almacén, respectivamente.

Se definen dos interfaces:

        BearState: Representa el estado del almacén con un stock global de productos.
                products: un número que representa la cantidad total de productos.

produce: una función que toma un parámetro amount (cantidad) y agrega esa cantidad al estado de products. También incrementa el stock por esa cantidad.
stock: un número que representa el stock total.
distribute: una función que toma un parámetro amount y reduce el stock en esa cantidad. También ajusta la cantidad de productos en función del stock actual.

        BearS: Representa el estado del almacén con stock individualizado por producto.

                 products: un objeto donde las claves son los IDs de los productos y los valores son los stocks de los respectivos productos.

produce: una función que toma un productId (ID del producto) y una cantidad (amount) y actualiza el stock y los productos en función del ID y la cantidad.
stock: un objeto similar a products, pero representa solo el stock disponible de cada producto.
distribute: una función similar a produce, pero se encarga de distribuir productos, disminuyendo el stock en función del ID y la cantidad.

interface BearState {

interface BearS {

          -[export const useBearStore = create<BearState>((set) => ({]

    -<Creamos el primer almacén de estado llamado useBearStore. Utilizamos la función create de Zustand para crear este almacén de estado con la forma definida por la interfaz BearState. Inicializamos el estado con valores iniciales de products y stock en 0.>


          - [export const useBear = create<BearS>((set) => ({]

    -<Creamos el segundo almacén de estado llamado useBear. Al igual que antes, utilizamos la función create de Zustand para crear este almacén de estado con la forma definida por la interfaz BearS. Inicializamos el estado con objetos vacíos {} para products y stock. Las funciones produce y distribute manejan la actualización de los objetos products y stock según la lógica descrita en la interfaz.>


    -----------Components

      - [const DistributeButton: React.FC = () => {]

      -Definimos un componente funcional de React llamado DistributeButton. Este componente no recibe propiedades (props) externas y devuelve elementos de React.

      - [  const distribute = useBearStore((state) => state.distribute);]

        -<Utilizamos el hook useBearStore para acceder a la función distribute del almacén de estado. La función useBearStore toma un selector como argumento, que en este caso es una función que selecciona distribute del estado.>

        - [   const handleDistribute = () => {
    distribute(1); // Puedes cambiar la cantidad según las necesidades

};]

        -<Definimos una función llamada handleDistribute, que se ejecutará cuando se haga clic en el botón. Dentro de esta función, llamamos a la función distribute del almacén de estado y le pasamos 1 como argumento para distribuir un producto.>

        - [   return <button onClick={handleDistribute}>Distribute 1 Product</button>;]

        -<El componente devuelve un botón. Cuando se haga clic en el botón, se ejecutará la función handleDistribute, que a su vez llamará a la función distribute del almacén de estado para distribuir un producto.>

-----------Component - [import React from "react";
import { useBearStore } from "../stores/bears.store"; ]

        -**Importamos React y el almacén de estado useBearStore desde el archivo bears.store en el directorio ../stores.

        - [const ProduceButton: React.FC = () => {]

        -<Componente funcional de React llamado ProduceButton>

        - [  const produce = useBearStore((state) => state.produce);]

        -<Utilizamos el hook useBearStore para acceder a la función produce del almacén de estado. Al igual que en el componente anterior, el selector proporcionado selecciona la función produce del estado.>

        - [  const handleProduce = () => {
    produce(1); // Puedes cambiar la cantidad

};]

        -<handleProduce, que se ejecutará cuando se haga clic en el botón. Dentro de esta función, llamamos a la función produce del almacén de estado y le pasamos 1 como argumento para producir un producto.>

        - [  return <button onClick={handleProduce}>Produce 1 Product</button>;]

        -<Devuelve un botón con el texto "Produce 1 Product". Cuando se haga clic en el botón, se ejecutará la función handleProduce, que a su vez llamará a la función produce del almacén de estado para producir un producto.>

----------Component - [const StockDisplay: React.FC = () => {]

        -<Definimos un componente funcional de React llamado StockDisplay.>

        - [  const stock = useBearStore((state) => state.stock);]

        -<tilizamos el hook useBearStore para acceder al estado de stock del almacén de estado. El selector proporcionado selecciona la propiedad stock del estado.>

        - [  return <div>Stock: {stock}</div>;]

        -<El componente devuelve un elemento div que muestra el texto "Stock:" seguido del valor de stock. Esto representa la visualización del stock actual de productos en la interfaz de usuario.>

        - [};

          export default StockDisplay;]

          -<Exportamos el componente StockDisplay para que pueda ser utilizado en otras partes de la aplicación.>

-----------Component - [const Product: React.FC = () => {]

        -<Componente funcional de React llamado Product. Al igual que los componentes anteriores, este componente no recibe propiedades (props) externas y devuelve elementos de React.>

        - [  const productId = React.useRef<number>(Math.random()).current;]

        -<Creamos una referencia productId utilizando el hook useRef de React. Esto se utiliza para generar un ID único para cada instancia del componente Product. La función Math.random() genera un número aleatorio, y useRef asegura que este número se mantenga constante durante el ciclo de vida del componente.>

        - [const { produce, distribute, stock } = useBear((state) => ({]

        -<Utilizamos el hook useBear para acceder a las funciones produce y distribute, así como al stock individual del producto. El selector proporcionado selecciona estas propiedades del estado y accede al stock específico del producto utilizando el productId generado anteriormente.>

        - [  const handleProduce = () => {
    produce(productId, 1); // Puedes cambiar la cantidad según las necesidades

};

const handleDistribute = () => {
distribute(productId, 1); // Puedes cambiar la cantidad según las necesidades
};]

-<Definimos funciones handleProduce y handleDistribute que se ejecutarán cuando se hagan clic en los botones "Produce 1 Product" y "Distribute 1 Product" respectivamente. Estas funciones llaman a las funciones produce y distribute del almacén de estado, pasando el productId del producto y 1 como cantidad. Esta cantidad puede cambiarse según las necesidades de la aplicación.>

- [return (
  <div>
    <h2>Product {productId}</h2>
    <button onClick={handleProduce}>Produce 1 Product</button>
    <button onClick={handleDistribute}>Distribute 1 Product</button>]

  -<Esta parte del código define la representación visual del producto en la interfaz de usuario, incluyendo su ID, botones para producir y distribuir productos, y la visualización del stock actual del producto.>
