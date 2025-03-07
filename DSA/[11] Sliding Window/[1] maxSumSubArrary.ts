export function maxSumSubArray(
  array: number[],
  windowSize: number
): number | null | Error {
  if (windowSize >= array.length)
    throw new Error(
      "Window Size Should be less then Number of Elements of Array"
    );

  if (!array.length) return null;

  let maxSum = sum(array.slice(0, windowSize));
  let currentSum = maxSum;

  for (let i = 1; i <= array.length - windowSize; i++) {
    // nextSum = currentSum + index +1 - index -1
    currentSum += array[i + windowSize - 1] - array[i - 1];

    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
}

export function sum(array: number[]): number {
  return array.reduce((acc, cur) => acc + cur, 0);
}
