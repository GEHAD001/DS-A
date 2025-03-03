export function reverseString(string: string): string {
  if (!string) return "";

  return reverseString(string.slice(1)) + string.at(0);
}

export function iteratedReverseString(string: string): string {
  let reverseString = "";

  // iterate from end to begin, NOTE: i equal length because 1 base not 0 base
  for (let i = 1; i <= string.length; i++) {
    reverseString += string.at(-i);
  }

  return reverseString;
}
