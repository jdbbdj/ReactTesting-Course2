import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "./";
import userEvent from "@testing-library/user-event";

test("checkbox uncheck by default & button disabled when unchecked", () => {
  render(<SummaryForm />);
  const screenRole = screen.getByRole("button", { name: "Test Button" });
  const screenRoleCheckBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(screenRoleCheckBox).not.toBeChecked();
  expect(screenRole).toBeDisabled();
});

test("checking inbox enables button", () => {
  render(<SummaryForm />);
  const screenRole = screen.getByRole("button", { name: "Test Button" });
  const screenRoleCheckBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  userEvent.click(screenRoleCheckBox);
  expect(screenRoleCheckBox).toBeChecked();
  expect(screenRole).toBeEnabled();
});

test("disclaimer shows when the Terms and Conditions is hovered", async () => {
  render(<SummaryForm />);
  //popover starts out hidden
  const nullPopOver = screen.queryByText(
    /no ice cream will be actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();
  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);

  userEvent.hover(termsAndConditions);
  const popOver = screen.getByText(
    /no ice cream will be actually be delivered/i
  );

  expect(popOver).toBeInTheDocument();

  //popover disappears when unhovered
  userEvent.unhover(termsAndConditions);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will be actually be delivered/i)
  );
});
