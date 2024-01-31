import { countOnes, convertToDecimal } from "../../src/template"; // Replace with your actual file name

describe("Binary String Manipulation Kata", () => {
  describe("Understanding the Basic Building Block: Counting Ones", () => {
    it("starts with the simplest case, an empty string, expecting no ones", () => {
      expect(countOnes("")).toBe(0);
    });

    it("then considers a string with no ones, like 0000, still finding no ones", () => {
      expect(countOnes("0000")).toBe(0);
    });

    it("progresses to a mixed string, 10101, accurately counting three ones", () => {
      expect(countOnes("10101")).toBe(3);
    });

    it("demonstrates that a string of all ones, 11111, correctly reports five ones", () => {
      expect(countOnes("11111")).toBe(5);
    });

    it("confirms reliability with longer strings, counting ten ones in 1010101010101010101", () => {
      expect(countOnes("1010101010101010101")).toBe(10);
    });
  });

  describe("Converting the Count of Ones to Decimal: The Heart of the Kata", () => {
    it("recognizes that zero ones translate into the decimal number 0", () => {
      expect(convertToDecimal(0)).toBe(0);
    });

    it("sees the conversion of one 1 into the decimal number 1", () => {
      expect(convertToDecimal(1)).toBe(1);
    });

    it("observes how three ones, representing 111, become the decimal number 7", () => {
      expect(convertToDecimal(3)).toBe(7);
    });

    it("transforms five ones into 31, showcasing the binary to decimal conversion", () => {
      expect(convertToDecimal(5)).toBe(31);
    });

    it("handles larger transformations, turning ten ones into the decimal 1023", () => {
      expect(convertToDecimal(10)).toBe(1023);
    });
  });
});
