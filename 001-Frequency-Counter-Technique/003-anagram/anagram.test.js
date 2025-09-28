import { anagram } from "./anagram";
import { describe, expect, it } from "vitest";

describe("Test", () => {
  it("test 1", () => {
    const result = anagram("iceman", "manice");
    expect(result).toBe(true);
  });
  it("test 1", () => {
    const result = anagram("abca", "abc");
    expect(result).toBe(false);
  });
});
