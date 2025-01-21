export function factorial(number: number): number {
  // Error Case
  if (number < 0) throw new Error("Input Should be negative number");

  // Base Case (First Solution)
  if (number === 0) return 1;

  // I'm Lazy, waiting other solution...
  return number * factorial(number - 1);
}

export function iteratedFactorial(number: number): number {
  if (number < 0) throw new Error("Input Should be negative number");

  let factorial = 1;
  for (let i = number; i !== 0; i--) {
    factorial *= i;
  }

  return factorial;
}
