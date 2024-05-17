import React from "react";
import { List, Table } from "antd";

const UserTable: React.FC = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Dirección",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Juan Pérez",
      age: 32,
      address: "Calle Falsa 123",
    },
    {
      key: "2",
      name: "Maria García",
      age: 28,
      address: "Av. Siempre Viva 456",
    },
    {
      key: "3",
      name: "Pedro González",
      age: 45,
      address: "Calle Luna 789",
    },
  ];

  return (
    <List>
      <Table columns={columns} dataSource={data} />;
    </List>
  );
};

export default UserTable;
