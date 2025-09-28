import { describe, expect, it } from "vitest";
import { moveZeroes } from "./moveZeros";

describe("Move Zeros", () => {
  it("should move zeros to end while maintaining order of non-zero elements", () => {
    const nums = [0, 1, 0, 3, 12];
    const result = moveZeroes(nums);

    expect(result).toEqual([1, 3, 12, 0, 0]);
  });

  it("should handle array with single zero", () => {
    const nums = [0];
    const result = moveZeroes(nums);

    expect(result).toEqual([0]);
  });

  it("should handle array with no zeros", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = moveZeroes(nums);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle array with all zeros", () => {
    const nums = [0, 0, 0, 0];
    const result = moveZeroes(nums);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it("should handle array with zeros at the beginning", () => {
    const nums = [0, 0, 1, 2, 3];
    const result = moveZeroes(nums);

    expect(result).toEqual([1, 2, 3, 0, 0]);
  });

  it("should handle array with zeros at the end", () => {
    const nums = [1, 2, 3, 0, 0];
    const result = moveZeroes(nums);

    expect(result).toEqual([1, 2, 3, 0, 0]);
  });

  it("should handle mixed positive and negative numbers with zeros", () => {
    const nums = [0, -1, 0, 3, -12];
    const result = moveZeroes(nums);

    expect(result).toEqual([-1, 3, -12, 0, 0]);
  });
});
