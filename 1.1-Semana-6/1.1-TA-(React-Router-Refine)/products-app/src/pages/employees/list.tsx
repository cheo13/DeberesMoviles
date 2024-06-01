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

interface Employee extends BaseRecord {
  id: number;
  name: string;
  position: string;
  department: string;
}

const data: Employee[] = [
  {
    id: 1,
    name: "Juan Pérez",
    position: "Developer",
    department: "IT",
  },
  {
    id: 2,
    name: "María López",
    position: "Designer",
    department: "Creative",
  },
];

export const EmployeesList: React.FC = () => {
  const { tableProps } = useTable<Employee>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id" dataSource={data}>
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="position" title="Position" />
        <Table.Column dataIndex="department" title="Department" />
        <Table.Column
          title="Actions"
          render={(text, record: Employee) => (
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
