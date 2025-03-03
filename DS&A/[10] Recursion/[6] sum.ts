export function sum(number: number): number {
  if (!number) return 0;

  return number + sum(number - 1);
}
