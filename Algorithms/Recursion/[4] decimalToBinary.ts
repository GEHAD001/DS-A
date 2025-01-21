export function decimalToBinary(number: number): string {
  if (!number) return "";

  return decimalToBinary(Math.floor(number / 2)) + (number % 2 ? "1" : "0");
}
