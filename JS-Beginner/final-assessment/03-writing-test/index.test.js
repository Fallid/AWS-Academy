import { it, describe, expect } from "bun:test";
import { sum } from "./index.js";
describe("Arithmethic", () => {
  it("Should sum correctly", () => {
    // Arrange
    const operandA = 1;
    const opreandB = 2;

    // Action
    const actualValue = sum(operandA, opreandB);

    // Assert
    const expectedValue = 3;
    expect(actualValue).toBe(expectedValue);
  });
});
