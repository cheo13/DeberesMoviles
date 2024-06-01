import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Spin } from "antd";
import React from "react";

const { Title } = Typography;

export const EmployeesShow: React.FC = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Show>
      <Title level={4}>Employee Details</Title>
      <div>
        <Title level={5}>ID</Title>
        <NumberField value={record?.id ?? ""} />
      </div>
      <div>
        <Title level={5}>Name</Title>
        <TextField value={record?.name} />
      </div>
      <div>
        <Title level={5}>Position</Title>
        <TextField value={record?.position} />
      </div>
      <div>
        <Title level={5}>Department</Title>
        <TextField value={record?.department} />
      </div>
    </Show>
  );
};
