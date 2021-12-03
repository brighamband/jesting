import add from "../src/add";

test("correctly adds 2 positive numbers", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(7, 5)).toBe(12);
  expect(add(11, 27)).toBe(38);
});

test("correctly adds 2 negative numbers", () => {
  expect(add(-10, -50)).toBe(-60);
});
