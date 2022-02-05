// import { render, screen, fireEvent } from "@testing-library/react";
// import OrderSummary from "./";

// test("checkbox uncheck by default & button disabled when unchecked", () => {
//   render(<OrderSummary />);
//   const screenRole = screen.getByRole("button", { name: "Test Button" });
//   const screenRoleCheckBox = screen.getByRole("checkbox", {
//     name: "I agree to Terms and Conditions",
//   });
//   expect(screenRoleCheckBox).not.toBeChecked();
//   expect(screenRole).toBeDisabled();
// });

// test("checking inbox enables button", () => {
//   render(<OrderSummary />);
//   const screenRole = screen.getByRole("button", { name: "Test Button" });
//   const screenRoleCheckBox = screen.getByRole("checkbox", {
//     name: "I agree to Terms and Conditions",
//   });
//   fireEvent.click(screenRoleCheckBox);
//   expect(screenRoleCheckBox).toBeChecked();
//   expect(screenRole).toBeEnabled();
// });
