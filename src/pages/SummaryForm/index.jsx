import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SummaryForm = () => {
  const [toBeChecked, setToBeChecked] = useState(false);

  const popOver = (
    <Popover id="popover-basic">
      <strong>no ice cream will be actually be delivered</strong>
    </Popover>
  );

  const checkBoxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popOver}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
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

export default SummaryForm;
