import { eliminateUnsetBits } from "../../src/template";

describe("The main objective of this app is to translate a given string that contains a binary of a number to a regular number", () => {
  it("11010101010101 should be translated to 255", () => {
    const binaryNumber = "11010101010101";
    const expectedNumber = 255;

    expect(eliminateUnsetBits(binaryNumber)).toEqual(expectedNumber);
  });
});
