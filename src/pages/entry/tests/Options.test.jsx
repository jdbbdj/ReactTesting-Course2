import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /toppings$/i });
  expect(scoopImages).toHaveLength(6);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual([
    "M&Ms toppings",
    "Hot fudge toppings",
    "Peanut butter cups toppings",
    "Gummi bears toppings",
    "Mochi toppings",
    "Cherries toppings",
  ]);
});
