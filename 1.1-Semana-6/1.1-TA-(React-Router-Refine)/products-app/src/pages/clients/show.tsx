import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Spin } from "antd";
import React from "react";

const { Title } = Typography;

export const ClientShow: React.FC = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Show>
      <Title level={4}>Client Details</Title>
      <div>
        <Title level={5}>ID</Title>
        <NumberField value={record?.id ?? ""} />
      </div>
      <div>
        <Title level={5}>Name</Title>
        <TextField value={record?.name} />
      </div>
      <div>
        <Title level={5}>Address</Title>
        <TextField value={record?.address} />
      </div>
      <div>
        <Title level={5}>Email</Title>
        <TextField value={record?.email} />
      </div>
      <div>
        <Title level={5}>Phone</Title>
        <TextField value={record?.phone} />
      </div>
    </Show>
  );
};
