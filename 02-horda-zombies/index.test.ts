import { describe, expect, expectTypeOf, test } from "vitest";
import { battleHorde } from "./index";

describe("Horda de zombies", () => {
  test("test #01", () => {
    expectTypeOf(battleHorde("", "")).toBeString();
  });
  
  test("test #02", () => {
    expect(battleHorde("242", "334")).toBe("2h");
  });
  
  test("test #03", () => {
    expect(battleHorde("444", "282")).toBe("x");
  });
  
  test("test #04", () => {
    expect(battleHorde("555", "666")).toBe("3h");
  });
  
  test("test #05", () => {
    expect(battleHorde("321", "123")).toBe("x");
  });
  
  test("test #06", () => {
    expect(battleHorde("4598", "7682")).toBe("3z");
  });
  
  test("test #07", () => {
    expect(battleHorde("8989898999", "7779998811")).toBe("20z");
  });
  
  test("test #08", () => {
    expect(battleHorde("57685849323", "98765438965")).toBe("10h");
  });
})