const ages = [2, 7, 19, 12, 17, 15, 3, 22, 5, 7, 4, 14];

const insert = (t_array, rightIndex, value) => {
  for(let i = 0; i < rightIndex; i += 1) {
    if(value === t_array[i]) {
      t_array.splice(rightIndex + 1, 1);
      t_array.splice(i, 0, value);
      break;
    }
    if(value < t_array[i]) {
      t_array.splice(rightIndex + 1, 1);
      t_array.splice(i, 0, value);
      break;
    }
    if(value > t_array[i] && value < t_array[i + 1]) {
      t_array.splice(rightIndex + 1, 1);
      t_array.splice(i + 1, 0, value);
      break;
    }
  }
  return t_array;
};

const insertionSort = (test) => {
  for(let i = 1, n = test.length; i < n; i += 1) {
    insert(test, i - 1, test[i]);
  }
  return test;
};

console.log(insertionSort(ages));
