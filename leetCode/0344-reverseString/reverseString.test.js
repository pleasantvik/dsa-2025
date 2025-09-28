import { describe, expect, it } from "vitest";
import { reverseString } from "./reverseString.js";

// Import the function - assuming it's exported

describe("Reverse String", () => {
  it("should reverse a string array with odd length", () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);

    expect(s).toEqual(["o", "l", "l", "e", "h"]);
  });

  it("should reverse a string array with even length", () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);

    expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
  });

  it("should handle single character array", () => {
    const s = ["a"];
    reverseString(s);

    expect(s).toEqual(["a"]);
  });

  it("should handle two character array", () => {
    const s = ["a", "b"];
    reverseString(s);

    expect(s).toEqual(["b", "a"]);
  });

  it("should handle array with numbers as strings", () => {
    const s = ["1", "2", "3", "4", "5"];
    reverseString(s);

    expect(s).toEqual(["5", "4", "3", "2", "1"]);
  });

  it("should handle array with special characters", () => {
    const s = ["!", "@", "#", "$"];
    reverseString(s);

    expect(s).toEqual(["$", "#", "@", "!"]);
  });

  it("should handle palindrome array", () => {
    const s = ["a", "b", "a"];
    reverseString(s);

    expect(s).toEqual(["a", "b", "a"]);
  });
});
