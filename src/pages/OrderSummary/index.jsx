import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Options from "../entry/Options";
const OrderSummary = () => {
  const [toBeChecked, setToBeChecked] = useState(false);

  const checkBoxLabel = (
    <span>
      <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );
  return (
    <>
      <Form>
        <Options optionType="scoops" />
      </Form>
    </>
  );
};

export default OrderSummary;
