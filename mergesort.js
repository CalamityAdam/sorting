function split(array) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const firstHalf = [];
  const secondHalf = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    index < Math.ceil(array.length / 2)
      ? firstHalf.push(element)
      : secondHalf.push(element);
  }

  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // debugger

  // if (!array1.length) {
  //   mergedArray = [...mergedArray, ...array2];
  //   return mergedArray;
  // } else if (!array2.length) {
  //   mergedArray = [...mergedArray, ...array1];
  //   return mergedArray;
  // } else {
  //   const left = array1[0];
  //   const right = array2[0];
  //   if (left > right) {
  //     mergedArray.push(right);
  //     return [...mergedArray, ...merge(array1, array2.slice(1))];
  //   } else {
  //     mergedArray.push(left);
  //     return [...mergedArray, ...merge(array1.slice(1), array2)];
  //   }
  // }

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // let splitArr = [...split(array)];
  // console.log('splitArr:', splitArr);
  console.log('before if:', array);
  if (array.length === 1) {
    // console.log('merge', merge(splitArr[0], splitArr[1]));
    return array;
  } else {
    // console.log(
    //   'return statement:',
    //   merge(mergeSort(array[0]), mergeSort(array[1]))
    // );
    const splitArr = split(array);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}
