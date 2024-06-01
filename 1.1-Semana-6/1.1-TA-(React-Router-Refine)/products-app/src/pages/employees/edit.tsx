import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import React from "react";

export const EmployeesEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({
    action: "edit",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="position"
          label="Position"
          rules={[{ required: true, message: "Please enter the position" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="department"
          label="Department"
          rules={[{ required: true, message: "Please enter the department" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
