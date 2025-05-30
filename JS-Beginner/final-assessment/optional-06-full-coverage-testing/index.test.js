import { test, expect, describe } from "bun:test";
import sum from "./index.js";

describe("Arithmatic", () => {
  test("Should sum correctly", () => {
    // Arrange
    const operandA = 4;
    const operandB = 1;
    const operandC = 10;
    const operandD = 0;

    // Action
    const actualValue1 = sum(operandA, operandB);
    const actualValue2 = sum(operandC, operandD);

    // Assert
    const expectedValue1 = 5;
    const expectedValue2 = 10;

    expect(actualValue1).toBe(expectedValue1);
    expect(actualValue2).toBe(expectedValue2);
  });

  test("Should returns 0 if numA or numB negative numbers", () => {
    // Arrange
    const operandA = -1;
    const operandB = 2;
    const operandC = -2;
    const operandD = -1;

    // Action
    const actualValue1 = sum(operandA, operandB);
    const actualValue2 = sum(operandC, operandD);

    // Assert
    const expectedValue = 0;

    expect(actualValue1).toBe(expectedValue);
    expect(actualValue2).toBe(expectedValue);
  });

  test("Should returns 0 if numA or numB input is non-numeric ", () => {
    // Arrange
    const operandA = "1";
    const operandB = 2;
    const operandC = 1;
    const operandD = "2";
    const operandE = "a";
    const operandF = "b";

    // Action
    const actualValue1 = sum(operandA, operandB);
    const actualValue2 = sum(operandC, operandD);
    const actualValue3 = sum (operandE, operandF);

    // Assert
    const expectedValue = 0;
    expect(actualValue1).toBe(expectedValue);
    expect(actualValue2).toBe(expectedValue);
    expect(actualValue3).toBe(expectedValue);
  });

  test("returns 0 if numA or numB input is null, undefined", () => {
    // Arrange
    const operandA = null;
    const operandB = 2;
    const operandC = 1;
    const operandD = undefined;
    const operandE = undefined;
    const operandF = null;

    // Action
    const actualValue1 = sum(operandA, operandB);
    const actualValue2 = sum(operandC, operandD);
    const actualValue3 = sum (operandE, operandF);

    // Assert
    const expectedValue = 0;
    expect(actualValue1).toBe(expectedValue);
    expect(actualValue2).toBe(expectedValue);
    expect(actualValue3).toBe(expectedValue);
  });
});
