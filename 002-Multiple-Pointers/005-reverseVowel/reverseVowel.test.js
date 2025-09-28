import { describe, expect, it } from "vitest";
import { reverseVowels } from "./reverseVowel.js";

describe("Reverse Vowels of a String", () => {
  it("should reverse vowels in mixed case string", () => {
    const result = reverseVowels("IceCreAm");

    expect(result).toBe("AceCreIm");
  });

  it("should reverse vowels in lowercase string", () => {
    const result = reverseVowels("leetcode");

    expect(result).toBe("leotcede");
  });

  it("should handle string with only two vowels", () => {
    const result = reverseVowels("aA");

    expect(result).toBe("Aa");
  });

  it("should handle string with no vowels", () => {
    const result = reverseVowels("bcdfg");

    expect(result).toBe("bcdfg");
  });

  it("should handle string with only vowels", () => {
    const result = reverseVowels("aeiou");

    expect(result).toBe("uoiea");
  });

  it("should handle single character vowel", () => {
    const result = reverseVowels("a");

    expect(result).toBe("a");
  });

  it("should handle single character consonant", () => {
    const result = reverseVowels("b");

    expect(result).toBe("b");
  });

  it("should handle string with repeated vowels", () => {
    const result = reverseVowels("race a car");

    expect(result).toBe("rece a car");
  });

  it("should handle uppercase vowels", () => {
    const result = reverseVowels("AEIOU");

    expect(result).toBe("UOIEA");
  });

  it("should handle mixed vowels and consonants", () => {
    const result = reverseVowels("hello");

    expect(result).toBe("holle");
  });

  it("should handle string with special characters", () => {
    const result = reverseVowels("a.b,e");

    expect(result).toBe("e.b,a");
  });
});
