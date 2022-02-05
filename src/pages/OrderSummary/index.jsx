import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={toBeChecked}
            onChange={(e) => setToBeChecked(e.target.checked)}
            label={checkBoxLabel}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!toBeChecked}>
          Test Button
        </Button>
      </Form>
    </>
  );
};

export default OrderSummary;
