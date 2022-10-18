const mathOperations = require("./calculadora");

describe("Calculator tests", () => {
  test("Sumando 5 + 2 nos debería devolver 7", () => {
    expect(mathOperations.sum(5, 2)).toBe(7);
  });
    
  test("Restando 5 - 2 nos debería devolver 3", () => {
     expect(mathOperations.diff(5, 2)).toBe(3);
   });

   test("Multiplicando 5 * 2 nos debería devolver 10", () => {
      expect(mathOperations.product(5, 2)).toBe(10);
    });
});
