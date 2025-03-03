export function mergeSort(array: any[]): any[] {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftSide = mergeSort(array.slice(0, mid));
  const rightSide = mergeSort(array.slice(mid));

  return mergeAndSortTwoArray(leftSide, rightSide);
}

function mergeAndSortTwoArray(leftSideArray: any[], rightSideArray: any[]) {
  let leftPtr = 0;
  let rightPtr = 0;
  let mergedArray = [];

  // If Still There's Elements in Both Side Then Continue Merge
  while (leftPtr < leftSideArray.length && rightPtr < rightSideArray.length) {
    if (leftSideArray.at(leftPtr) <= rightSideArray.at(rightPtr)) {
      mergedArray.push(leftSideArray.at(leftPtr));
      leftPtr++;
      continue;
    }

    mergedArray.push(rightSideArray.at(rightPtr));
    rightPtr++;
  }

  return mergedArray
    .concat(leftSideArray.slice(leftPtr))
    .concat(rightSideArray.slice(rightPtr));

  //   // If Left Side Still Has elements, then merge all of it
  //   if (leftPtr < leftSideArray.length)
  //     return (mergedArray = [...mergedArray, ...leftSideArray.slice(leftPtr)]);

  //   // here we know left side doesn't has any element, then merge right side with the other elements.
  //   return [...mergedArray, ...rightSideArray.slice(rightPtr)];
}

export function linearSort<T>(array: T[]) {
  let sortedArray = array.slice();
  let minValueAt;

  for (let i = 0; i < sortedArray.length; i++) {
    minValueAt = i;

    for (let j = i; j < sortedArray.length; j++) {
      if (sortedArray.at(j)! < sortedArray.at(minValueAt)!) minValueAt = j;
    }

    const holdValue = sortedArray.at(i);
    sortedArray[i] = sortedArray.at(minValueAt)!;
    sortedArray[minValueAt] = holdValue!;
  }

  return sortedArray;
}
