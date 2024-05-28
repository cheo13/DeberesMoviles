import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProductsEdit: React.FC = () => {
  const { formProps, saveButtonProps, formLoading } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[{ required: true, message: "Please enter the product name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Description"}
          name={["description"]}
          rules={[
            { required: true, message: "Please enter the product description" },
          ]}
        >
          <MDEditor />
        </Form.Item>
        <Form.Item
          label={"Price"}
          name={["price"]}
          rules={[
            { required: true, message: "Please enter the product price" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label={"Status"}
          name={["status"]}
          rules={[
            { required: true, message: "Please select the product status" },
          ]}
        >
          <Select>
            <Select.Option value="available">Available</Select.Option>
            <Select.Option value="unavailable">Unavailable</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Edit>
  );
};
