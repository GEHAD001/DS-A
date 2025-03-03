export function isPalindrome(value: string | any[]): boolean {
  console.log(value);
  // Base-Case [Solution]
  if (value.length <= 1) return true;

  // Fallback Case
  if (value.at(0) !== value.at(-1)) return false;

  return isPalindrome(value.slice(1, -1));
}
