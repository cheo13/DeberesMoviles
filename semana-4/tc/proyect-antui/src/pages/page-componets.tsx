import React from "react";
import PrimaryButton from "../componets/models/button-component";
import CheckboxComponent from "../componets/models/checkbox-component";
import TextInput from "../componets/models/text-component";
import DatePickerComponent from "../componets/models/dateselect-component";
import SelectComponent from "../componets/models/select-component";
import SwitchComponent from "../componets/models/switch-component";
import { Row, Col } from "antd";

const ComponentsPage: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "56px",
      }}
    >
      <div style={{ width: "100%" }}>
        <PrimaryButton />
      </div>

      <div style={{ width: "100%" }}>
        <CheckboxComponent />
      </div>
      <div style={{ width: "100%" }}>
        <TextInput />
      </div>
      <div style={{ width: "100%" }}>
        <DatePickerComponent />
      </div>
      <div style={{ width: "100%" }}>
        <SelectComponent />
      </div>
      <div style={{ width: "100%" }}>
        <SwitchComponent />
      </div>
    </div>
  );
};

export default ComponentsPage;
