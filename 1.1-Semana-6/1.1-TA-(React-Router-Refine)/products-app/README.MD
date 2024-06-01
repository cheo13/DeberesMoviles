# Recursos de Empleados y Clientes - Trabajo Autonomo

    - Haciendo uso de React TS, Vite y Refine para crear APPS tres veces más rápido, empleando bibliotecas de componentes como ANT Design para gestionar y mostrar listas de empleados y clientes.
    - Se detallan los componentes principales de cada recurso y como se utilizan.

    - Tambien se emplea el uso de react-router para manejar las rutas, esto ya lo instala el Refine al momento de crear un proyecto pero si fuese otro caso:

    Comando Consola: npm install react-router-dom

# Procedimiento

- Se crea un proyecto con Vite y Refine con ReactTS.
  Comando consola: <npm create refine-app@latest>
  Visitar documentación: https://refine.dev/

        Este framework puede crear por defecto recursos como muestra en los que el programador puede basarse y editar el contenido a su disposición.
        Ya viene con algunas herramientas pre instaladas con el proyecto como la que se emplea react-router.

# < Recurso de Empleados >

    - Se crea una carpeta 'employees' que contendra los componentes relacionados con la gestion de empleados de la app.
    - Se encuentran componentes para listar, crear, editar y mostrar los detalles de los empleados.

    <EmployeeList> Componente que muestra una lista de empleados con opciones para editar, ver y eliminiar cada empleado.

    - Importación de bibliotecas, componentes y metodos.
    * import {

DeleteButton,
EditButton,
List,
ShowButton,
useTable,
} from "@refinedev/antd";

- De esta manera se importan modulos de componentes y hooks de AntDesign para nuestro frontend.

      * import { BaseRecord } from "@refinedev/core";
      - La importacion de 'BaseRecord' proporciona una interface basica para definir registros en la app.
      - BaseRecord: Define las propiedades basicas que un registro 'objeto' debe tener en Refine.
      - Cuando se extiende de 'BaseRecord' se asegura que los registros tienen al menos las propiedades basicas requeridas por Refine.

      * export type BaseRecord = {

  id?: BaseKey;
  [key: string]: any;
  }; - Esta seria la interfaz la cual puede recibir multiples propiedades.

      * interface Employee extends BaseRecord {

  id: number;
  name: string;
  position: string;
  department: string;
  } - El modelo de interface Employee detalla como se emplea la interface BaseRecord, donde se extiende de mi otra interface para agregarle mas campos que se requieren en el frontend.

      * const data: Employee[] = [

          - La data quemada o valores ingresados para prueba son utiles para representar la estructura de datos y ver como se visualizan en el frontend.

                {
      id: 1,
      name: "Juan Pérez",
      position: "Developer",
      department: "IT",
              },
          - Detallando las propiedades definidas en la interface se pasa a inicializar con un valor.

      * export const EmployeesList: React.FC = () => {..}

          - Se crea el componente funcionan de React TS.

      * const { tableProps } = useTable<Employee>({
      syncWithLocation: true,

  }); - Se inicializa el hook 'useTable' que lo proporciona Refine para ayudar a manejar la logica de la tabla. - 'Employee' es la interfaz que define la estructura de los datos de empleados. - 'syncWithLocation: true' permite que el estado de la tabla (paginacion y filtrado) se sincronice con la URL.

      * return (

    <List>

      - List: Es un componente de Refine que proporciona un contenedor estilizado para la vista de lista.

      * <Table {...tableProps} rowKey="id" dataSource={data}>
      - Table: Es un componente de Ant Design que muestra los datos en formato de tabla.

      - ...tableProps: Propaga todas las propiedades manejadas por 'useTable' al componente 'Table'.

      * rowKey='id': Espeficica que la clave unica para cada file en la tabla es el campor 'id'.

      * dataSource={data}: Establece la fuente de datos de la tabla usando datos quemados.

      * Table.Colum: Define cada columna de la tabla.

      * dataIndex: Especifica la clave del objeto de datos que se mostrara en esa columna.

      * title: Establece el encabezado de la columna.

      * La columna de Actions no tiene 'dataIndex' puesto que su proposito es renderizar botones de acción.

      * render: Es una funcion que define como se debe renderizar el contenido de cada celda en esa columna.

      * (text, record: Employee): Recibe el texto de la celda y el registro completo de datos de la fila.

      'Space': Es un componente de AntDesign que organiza los botones con un espacio entre ellos.

      * EditButton, ShowButton, y DeleteButton: Son componentes de Refine para manejar acciones correspondientes a ese componente.

      - Se cierran los componentes Table y List para completar la estructura del componente EmployeesList.

      --<create.tsx> Este componente proporciona un formulario para crear nuevos empleados.

      const { formProps, saveButtonProps } = useForm({});
      - 'useForm': Es un hook de Refine que maneja la lógica del formulario, incluyendo la validación, el envío de datos y la gestión del estado del formulario.
              formProps: Se propaga al componente Form de Ant Design para conectar el formulario con el hook useForm.
      saveButtonProps: Se usa para configurar el botón de guardar del formulario, incluyendo el manejo de eventos como el clic.

      * return (
      <Create saveButtonProps={saveButtonProps}>

      - Create es un componente de Refine que proporciona una interfaz estándar para la creación de registros.
      - saveButtonProps: Se pasa al componente Create para configurar el botón de guardar del formulario.

      * <Form {...formProps} layout="vertical">

      - Form es un componente de Ant Design que crea un formulario.
      - ...formProps propaga todas las propiedades manejadas por useForm al componente Form, conectando el estado y la lógica del formulario.
      - layout="vertical" establece el diseño del formulario para que las etiquetas y los campos estén dispuestos verticalmente.

      * Form.Item define un campo del formulario.
      - name: Especifica el nombre del campo en el formulario.
      - label: Establece el texto de la etiqueta del campo.
      - rules: Especifica las reglas de validación para el campo.
      - required: Indica que el campo es obligatorio.
      - message: Especifica el mensaje de error para el campo.
      - input: Es un componente de Ant Design que representa un campo de entrada de texto.
      *         </Form>
      </Create>

  );

- </Form> cierra el componente Form de Ant Design.
- </Create> cierra el componente Create de Refine.

      -<EmployeesEdit> Componente para editar un empleado.

  - const { formProps, saveButtonProps } = useForm({
    action: "edit",
    });


      - useForm es un hook de Refine que maneja la lógica del formulario.

      - action: "edit" indica que el formulario se utilizará para editar un registro existente.

      - Edit es un componente de Refine que proporciona una interfaz estándar para la edición de registros.

      - saveButtonProps se pasa al componente Edit para configurar el botón de guardar del formulario.

      - Form.Item define un campo del formulario.

      -<EmployeesShow> Muestra los detalles de un empleado seleccionado.

      Importaciones:
          import { NumberField, Show, TextField } from "@refinedev/antd";
          import { useShow } from "@refinedev/core";
          import { Typography, Spin } from "antd";
          import React from "react";

      - NumberField, Show, y TextField son componentes de Refine utilizados para mostrar campos numéricos y de texto.
      - useShow es un hook de Refine que maneja la lógica para obtener los datos de un registro.
      - Typography y Spin son componentes de Ant Design utilizados para mostrar texto con estilo y un indicador de carga, respectivamente.
      - React se importa para utilizar componentes funcionales de React.

      * Desestructuración de Title de Typography *
      - const { Title } = Typography;

          - Title se desestructura de Typography para ser utilizado como componente para mostrar títulos.

      * const { queryResult } = useShow({});
          const { data, isLoading } = queryResult;
          - useShow es un hook de Refine que maneja la obtención de datos para mostrar los detalles de un registro.
          - queryResult contiene los resultados de la consulta, incluyendo los datos (data) y el estado de carga (isLoading).

      * const record = data?.data;
          - record obtiene los datos del registro desde data.
      * if (isLoading) {
              return <Spin />;
              }
          - Si isLoading es true, se muestra el componente Spin de Ant Design como indicador de carga.

      - return (

    <Show>
              - Show es un componente de Refine que proporciona una interfaz estándar para mostrar los detalles de un registro.

          *  <Title level={4}>Employee Details</Title>
              - Se muestra un título principal "Employee Details".
          - level={4} especifica el nivel del título, similar a <h4> en HTML.

          * <NumberField value={record?.id ?? ""} />
          - NumberField es un componente de Refine utilizado para mostrar valores numéricos.
              - value={record?.id ?? ""} establece el valor del NumberField:
              - record?.id utiliza la sintaxis de encadenamiento opcional (?.) para acceder al campo id del objeto record, que contiene los datos del empleado. Si record es null o undefined, el valor será undefined.
              - ?? "" es el operador de fusión nula, que devuelve una cadena vacía ("") si record?.id es null o undefined. Esto asegura que siempre haya un valor mostrado, aunque sea vacío, en caso de que no haya datos disponibles.

          * </Show>

          - Se cierra el componente Show, finalizando la estructura del componente EmployeesShow.

# < Recurso de Clientes >

    - Componente ClientsList

        * Muestra una lista de clientes con acceso a los diferentes botones de acciones.
            - Se importan los componentes necesarios de antd y refinedev/antd para la funcionalidad de la lista y los botones de acción.
                - BaseRecord se importa de @refinedev/core para definir la estructura de los datos del cliente.

    - Se define una interfaz Client que extiende BaseRecord para definir la estructura de los datos del cliente, incluyendo campos como id, name, address, email y phone.

        * const data: Client[] = [...]
        - Se definen datos simulados de clientes para mostrar en la lista.

    - Se renderiza una lista de clientes utilizando un componente List de refinedev/antd.
    - Se utiliza un componente Table de antd para mostrar los datos de los clientes, configurado con propiedades como tableProps, rowKey y dataSource.
    - Se definen columnas dentro de la tabla para mostrar los datos de los clientes, incluyendo id, name, address, email y phone.
    - Se agrega una columna para las acciones de editar, ver y eliminar utilizando los botones EditButton, ShowButton y DeleteButton.

    -<ClientCreate.tsx>  Es responsable de renderizar un formulario para crear un nuevo cliente.

    - const { formProps, saveButtonProps } = useForm({});
    - useForm es un hook de Refine que proporciona una interfaz para crear y editar registros.

            -   Se utiliza el componente Create de @refinedev/antd para envolver el formulario y agregar funcionalidad de creación.
            -   Se renderiza un formulario utilizando el componente Form de antd.
            -   Se configuran las propiedades del formulario (formProps) para manejar el estado del formulario y el diseño vertical.

    - Se definen varios campos de formulario utilizando el componente Form.Item de antd.
    - Cada campo tiene un nombre (name), una etiqueta (label) y reglas de validación definidas.
    - Se utiliza el componente Input de antd para permitir al usuario ingresar datos en cada campo.

    --<ClientEdit.tsx> Se encarga de proporcionar un formulario para editar un cliente existente.

    * const { formProps, saveButtonProps } = useForm({

action: "edit",
});

    - Se utiliza el hook useForm para inicializar el estado del formulario y obtener las propiedades del formulario (formProps) y las propiedades del botón de guardar (saveButtonProps). Se establece la acción como "edit" para indicar que se trata de un formulario de edición.

    - Se utiliza el componente Edit de @refinedev/antd para envolver el formulario y agregar funcionalidad de edición.

    - Se configuran las propiedades del formulario (formProps) para manejar el estado del formulario y el diseño vertical.

    - Se definen varios campos de formulario utilizando el componente Form.Item de antd.

    - Se utiliza el componente Input de antd para permitir al usuario editar los datos en cada campo.

# index.ts

        Empleando este archivo de esa manera se logra:

    * Se utilizan exportaciones de "exportación por defecto" para exportar de manera eficiente todos los componentes relacionados con la gestión de clientes en una sola declaración.

    - Cada línea export * from "./list" exporta todos los elementos exportables del archivo correspondiente, que incluye los componentes de lista, creación, edición y visualización de clientes.

    - Esto facilita la importación de todos estos componentes desde otros archivos mediante una sola importación, lo que mejora la legibilidad y la organización del código.

    <index.ts sirve como punto de entrada para todos los componentes relacionados con la gestión de empleados y clientes en el módulo. >

# Rutas en el APP.tsx

    * Configuración de React Router
    * Se utiliza el componente Route de React Router para definir las rutas de la aplicación.
    * Se importan los componentes necesarios de React Router para configurar las rutas en la aplicación.

        < import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"; >

    - Definición de las Rutas:

        * Se envuelve la aplicación con el componente BrowserRouter para proporcionar enrutamiento a la aplicación.
                - <BrowserRouter>

        * Se definen rutas utilizando el componente Routes.
                - <Routes>
        * Para las rutas que requieren autenticación, se utiliza el componente Authenticated para proteger el acceso.

        * Se definen las rutas para los recursos "employees" y "clients" dentro de las rutas autenticadas.

        * Cada ruta define qué componente debe ser renderizado cuando la URL coincide con la ruta especificada.

        -  resources={[
                  {...}]}
                * Esta sección específica define los recursos que se utilizarán en la aplicación Refine.
                - name: Define el nombre del recurso, en este caso, "employees".
                - list: Es la ruta para ver la lista de empleados.
                - create: Es la ruta para crear un nuevo empleado.
                - edit: Es la ruta para editar un empleado existente.
                -show: Es la ruta para ver los detalles de un empleado específico.

                - " se usa como marcador de posición.
                - meta: Proporciona metadatos adicionales sobre el recurso. En este caso, indica si se permite la eliminación de empleados (canDelete: true).

            < Se establecen las rutas especificas relacionadas con los recursos de empleados y clientes >

            - <Route path="/employees">: Esta ruta principal corresponde a la URL base para todas las acciones relacionadas con los empleados. Todas las rutas relacionadas con los empleados se anidan dentro de esta ruta.

            - <Route index element={<EmployeesList />} />: Esta es la ruta por defecto cuando se accede a "/employees". Utiliza el componente EmployeesList como elemento a ser renderizado.

            - <Route path="create" element={<EmployeesCreate />} />: Esta ruta se corresponde con "/employees/create". Cuando se accede a esta URL, se renderizará el componente EmployeesCreate, que permite la creación de un nuevo empleado.

            - <Route path="edit/:id" element={<EmployeesEdit />} />: Esta ruta es dinámica y utiliza un parámetro de ruta " " para identificar un empleado específico para editar. Por ejemplo, "/employees/edit/12" correspondería a la edición del empleado con el ID 12.

            - <Route path="show/:id" element={<EmployeesShow />} />: Similar a la ruta de edición, esta ruta también es dinámica y utiliza el parámetro " " para mostrar los detalles de un empleado específico. El componente EmployeesShow se utiliza para mostrar los detalles del empleado.

En resumen la gestion de un crud se hace mas facil empleando herramientas de desarrollo que ya bien previamente creadas en su mayoria donde solo hay que comprender el codigo y editarlo a disposicion.
