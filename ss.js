const ages = [2, 7, 19, 12, 17, 15, 3, 22, 5, 7, 4, 14];

const swap = (t_array, firstIndex, secondIndex) => {
  const firstValue = t_array[firstIndex];
  const secondValue = t_array[secondIndex];
  t_array[firstIndex] = secondValue;
  t_array[secondIndex] = firstValue;
  return t_array;
};

const selectionSort = (test) => {
  let i, n = test.length;
  for(i = 0; i < n; i += 1) {
    let smallestValue = test[i], smallestValueIndex = i;
    for(let j = i; j < n; j += 1) {
      if(test[j] < smallestValue) {
        smallestValue = test[j];
        smallestValueIndex = j;
      }
    }
    if (smallestValue < test[i]) {
      swap(test, i, smallestValueIndex);
    }
  }
  return test;
};

console.log(selectionSort(ages));
