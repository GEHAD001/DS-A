export function decimalToBinary(number: number): string {
  if (!number) return "";

  return decimalToBinary(Math.floor(number / 2)) + (number % 2 ? "1" : "0");
}

export function decimalToBinaryV2(
  number: number,
  currentBinary: string = ""
): string {
  // return Final Solution
  if (!number) {
    return currentBinary;
  }

  // Solution of Current Problem & Merge With Other Solution
  currentBinary = (number % 2 ? "1" : "0") + currentBinary;

  // Pass the new Problem & Current Solution
  return decimalToBinaryV2(Math.floor(number / 2), currentBinary);
}

export function iteratedDecimalToBinary(number: number): string {
  let binaryFormat = "";

  for (let i = number; i !== 0; i = Math.floor(i / 2))
    binaryFormat = (i % 2 ? "1" : "0") + binaryFormat;

  return binaryFormat;
}
