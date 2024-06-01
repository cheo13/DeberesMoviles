import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";

interface Client extends BaseRecord {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const data: Client[] = [
  {
    id: 1,
    name: "Carlos García",
    address: "Calle 1, 1-1, 1-1",
    email: "carlos.garcia@google.com",
    phone: "0986549589",
  },
  {
    id: 2,
    name: "Ana Martínez",
    address: "Calle 2, 2-2, 2-2",
    email: "ana.martinez@google.com",
    phone: "0987564987",
  },
];

export const ClientList: React.FC = () => {
  const { tableProps } = useTable<Client>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id" dataSource={data}>
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="address" title="Address" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="phone" title="Phone" />
        <Table.Column
          title="Actions"
          render={(text, record: Client) => (
            <Space>
              <EditButton size="small" recordItemId={record.id} />
              <ShowButton size="small" recordItemId={record.id} />
              <DeleteButton size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
