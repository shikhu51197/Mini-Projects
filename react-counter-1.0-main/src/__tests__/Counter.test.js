import { render, fireEvent, getAllByRole } from "@testing-library/react";
import Counter from "../components/Counter";
import App from "../App";

let getByTestId;
beforeAll(() => {
  global.score = 1;
  console.log("Score rest to 1");
});

beforeEach(() => {
  const component = render(<App />);
  getByTestId = component.getByTestId;
});
describe("Render buttons", () => {
  test("render counter header in h2 tag with `Counter` as text", () => {
    const headerEle = getByTestId("counter-header");
    expect(headerEle.tagName).toBe("H2");
    expect(headerEle.textContent).toBe("Counter");
    global.score += 1;
  });
  test("should render Counter component with initCount = 0 as props", () => {
    expect(Counter).toBeDefined();
    let props = {
      initCount: 0,
    };
    let { getAllByRole } = render(<Counter {...props} />);
    const heading = getAllByRole("heading");
    expect(heading[1].tagName).toBe("H3");
    expect(heading[1].textContent).toBe(props.initCount.toString());
    global.score += 2;
  });
  test("render add button with text as +", () => {
    const addBtn = getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");
    global.score += 1;
  });
  test("render subtract button with text as -", () => {
    const subtractBtn = getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");
    global.score += 1;
  });
  test("render double button with text as Double", () => {
    const doubleBtn = getByTestId("double-btn");
    expect(doubleBtn.textContent).toBe("Double");
    global.score += 1;
  });
  test("add button should work properly", () => {
    const addBtn = getByTestId("add-btn");
    const countEle = getByTestId("count");
    fireEvent.click(addBtn);
    expect(countEle.textContent).toBe("1");
    fireEvent.click(addBtn);
    expect(countEle.textContent).toBe("2");
    global.score += 2;
  });

  test("subtract button should work", () => {
    const subtractBtn = getByTestId("subtract-btn");
    const countEle = getByTestId("count");
    console.log(countEle.textContent, "sub");

    fireEvent.click(subtractBtn);
    expect(countEle.textContent).toBe("-1");

    fireEvent.click(subtractBtn);
    expect(countEle.textContent).toBe("-2");
    global.score += 2;
  });
  test("double button should work", () => {
    const double = getByTestId("double-btn");
    const incBtn = getByTestId("add-btn");
    const countEle = getByTestId("count");
    fireEvent.click(incBtn);
    expect(countEle.textContent).toBe("1");
    fireEvent.click(double);
    expect(countEle.textContent).toBe("2");
    fireEvent.click(double);
    expect(countEle.textContent).toBe("4");
    global.score += 2;
  });
});
afterAll(() => {
  console.log("Final Score is", global.score);
});
