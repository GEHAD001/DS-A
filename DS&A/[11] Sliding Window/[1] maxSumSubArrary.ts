export function maxSumSubArray(
  array: number[],
  windowSize: number
): number | null | Error {
  if (windowSize >= array.length)
    throw new Error(
      "Window Size Should be less then Number of Elements of Array"
    );

  if (!array.length) return null;

  let max = sum(array.slice(0, windowSize));
  let current = max;

  for (let i = 1; i <= array.length - windowSize; i++) {
    current += array[i + windowSize - 1] - array[i - 1];

    if (current > max) max = current;
  }

  return max;
}

export function sum(array: number[]): number {
  return array.reduce((acc, cur) => acc + cur, 0);
}
