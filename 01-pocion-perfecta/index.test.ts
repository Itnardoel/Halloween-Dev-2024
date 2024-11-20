import { describe, it, expect, expectTypeOf, test } from "vitest";
import { createMagicPotion } from './index'

describe("Crea la poción perfecta", () => {
  test("Test #01", () => {
    expectTypeOf(createMagicPotion([1,2,3], 5)!).toBeArray();
  });
  
  test("test #02", () => {
    expect(createMagicPotion([13, 5, 6, 2], 8)).toStrictEqual([2, 3]);
  });
  
  test("test #03", () => {
    expect(createMagicPotion([11, 3, 7, 5], 10)).toStrictEqual([1, 2]);
  });
  
  test("test #04", () => {
    expect(createMagicPotion([4, 3, 2, 3, 4], 6)).toStrictEqual([0, 2]);
  });
  
  test("test #05", () => {
    expect(createMagicPotion([0, 0, -2, 3], 2)).toBeUndefined();
  });
  
  test("test #06", () => {
    expect(createMagicPotion([10, 5, 2, 3, 7, 5], 10)).toStrictEqual([3, 4]);
  });
  
  test("test #07", () => {
    expect(createMagicPotion([1, 2, 3, 4, 5], 8)).toStrictEqual([2, 4]);
  });
  
  test("test #08", () => {
    expect(createMagicPotion([5, 1, 4, 6, 2], 9)).toStrictEqual([0, 2]);
  });
  
  test("test #09", () => {
    expect(createMagicPotion([1, -2, 3, -4, 5], -1)).toStrictEqual([0, 1]);
  });
  
  test("test #10", () => {
    expect(createMagicPotion([10, 20, 30, 40], 50)).toStrictEqual([1, 2]);
  });
  
  test("test #11", () => {
    expect(createMagicPotion([], 10)).toBeUndefined();
  });
})