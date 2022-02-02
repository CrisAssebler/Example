import Greetings from "../01-exercise";

test("Greetings'", () => {
  expect(() => {
    Greetings();
  }).not.toThrow();

  expect(Greetings()).toMatch(/Hello-Student/i);
});
