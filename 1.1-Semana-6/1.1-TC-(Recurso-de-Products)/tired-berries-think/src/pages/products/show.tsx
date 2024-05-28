import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ProductsShow: React.FC = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <NumberField value={record?.id ?? ""} />

      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />

      <Title level={5}>{"Description"}</Title>
      <MarkdownField value={record?.description} />

      <Title level={5}>{"Price"}</Title>
      <NumberField value={record?.price} />

      <Title level={5}>{"Status"}</Title>
      <TextField value={record?.status} />

      <Title level={5}>{"Created At"}</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
