export function binarySearch(
  array: any[],
  leftPtr: number,
  rightPtr: number,
  target: any
): number | undefined {
  const midPtr = Math.floor((leftPtr + rightPtr) / 2);
  // Base-Case
  if (leftPtr > rightPtr) return undefined;

  // Fall-Back Case (Solution)
  if (array[midPtr] === target) return midPtr;

  // Eliminate Right-Side
  if (target < array[midPtr])
    return binarySearch(array, leftPtr, midPtr - 1, target);

  // Eliminate Left-Side
  return binarySearch(array, midPtr + 1, rightPtr, target);
}

export function iteratedBinarySearch(
  array: any[],
  leftPtr: number,
  rightPtr: number,
  target: any
): number | undefined {
  let mid;
  while (leftPtr <= rightPtr) {
    mid = Math.floor((leftPtr + rightPtr) / 2);
    if (target === array[mid]) return mid;

    if (target < array[mid]) rightPtr = mid - 1;
    if (target > array[mid]) leftPtr = mid + 1;
  }

  return undefined;
}
