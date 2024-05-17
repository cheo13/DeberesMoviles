import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SelectComponent: React.FC = () => {
  return (
    <Select placeholder="Seleccione una opción" style={{ width: 200 }}>
      <Option value="opcion1">Opción 1</Option>
      <Option value="opcion2">Opción 2</Option>
    </Select>
  );
};

export default SelectComponent;
