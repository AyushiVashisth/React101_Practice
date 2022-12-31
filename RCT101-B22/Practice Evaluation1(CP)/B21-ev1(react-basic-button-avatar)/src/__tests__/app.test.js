import { render } from "@testing-library/react";
import React from "react";

import Button from "../Components/Button";
import Avatar from "../Components/Avatar";

// Do not change anything in the file
// We will be overrdiing this file while running our tests
// ensure you are submitting your entire project

beforeAll(() => {
  global.score = 1;
  console.log("Score rest to 1");
});

describe("Button Component", () => {
  test.only(`Description:should render Button component with text click me
              1. button text should be click me
              2. button should have 1 rem padding
              3. button should have backgroundColor fo tomato`, () => {
    expect(Button).toBeDefined();
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    expect(button.textContent.trim().toLowerCase()).toMatch(/click me/i);
    expect(button.style.padding).toBe("1rem");
    expect(button.style.backgroundColor).toBe("tomato");
    global.score += 3;
  });
});
describe("should render Avatar component with image and caption as props(data1)", () => {
  test.only(`Description:Avatar with caption
              1. should have caption in h2 tag
              2. image tag should haveimage passed as prop
              3. the image should have border radius of 50%
              `, () => {
    expect(Avatar).toBeDefined();
    let props = {
      image: "https://via.placeholder.com/140x100",
      caption: "Masai",
    };
    const { getByRole } = render(<Avatar {...props} />);
    const image = getByRole("img");
    const heading = getByRole("heading");
    expect(heading.tagName).toBe("H2");
    expect(image.getAttribute("alt")).toBe(props.caption);
    expect(image.getAttribute("src")).toBe(props.image);
    expect(image.style.borderRadius).toBe("50%");
    global.score += 3;
  });
});
describe("should render avatar component with image and caption as props(data2)", () => {
  test.only(`Description:Avatar with caption
              1. should have caption in h2 tag
              2. image tag should haveimage passed as prop
              3. the image should have border radius of 50%`, () => {
    expect(Avatar).toBeDefined();
    let props = {
      image: "https://via.placeholder.com/140x100",
      caption: "Masai School",
    };
    const { getByRole } = render(<Avatar {...props} />);
    const image = getByRole("img");
    const heading = getByRole("heading");
    expect(heading.tagName).toBe("H2");
    expect(image.getAttribute("alt")).toBe(props.caption);
    expect(image.getAttribute("src")).toBe(props.image);
    expect(image.style.borderRadius).toBe("50%");
    global.score += 3;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
