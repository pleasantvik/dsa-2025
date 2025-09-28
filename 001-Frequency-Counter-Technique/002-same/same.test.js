import { describe, expect, it } from "vitest";
import { same } from "./same";
const same = require("./same");
describe("check if they are same", () => {
  it("test 1", () => {
    const result = same([], []);
    expect(result).toBe(true);
  });

  it("test 2", () => {
    const result = same([], [1]);
    expect(result).toBe(false);
  });
  it("test 3", () => {
    const result = same([2, 1, 2, 1], [1, 4, 1, 1]);
    expect(result).toBe(false);
  });

  it("test 1", () => {
    const result = same([1, 2, 4, 5], [25, 4, 1, 16]);
    expect(result).toBe(true);
  });
});
