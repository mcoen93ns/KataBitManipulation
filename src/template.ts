export function countOnes(binaryString: string): number {
  return binaryString.split("").filter((char) => char === "1").length;
}

export function convertToDecimal(binaryLength: number): number {
  return binaryLength === 0 ? 0 : parseInt("1".repeat(binaryLength), 2);
}

export function eliminateUnsetBits(number: string): number {
  const onesCount = countOnes(number);
  return convertToDecimal(onesCount);
}
