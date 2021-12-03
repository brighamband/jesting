import subtract from "../src/subtract";

test("correctly subtracts 2 postive numbers", () => {
  expect(subtract(10, 6)).toBe(4);
  expect(subtract(18, 6)).toBe(12);
  expect(subtract(5, 8)).toBe(-3);
});

test("correctly subtracts 2 negative numbers", () => {
  expect(subtract(-10, -6)).toBe(-4);
  expect(subtract(-18, -2)).toBe(-16);
  expect(subtract(-2, -11)).toBe(9);
});
