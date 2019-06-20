const ages = [2, 7, 19, 12, 17, 15, 3, 22, 5, 7, 4, 14];

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
};

const partition = (arr, p, l, r) => {
    let pivotValue = arr[p],
        partitionIndex = l;

    for (let i = l; i < r; i += 1) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex += 1;
        }
    }
    swap(arr, r, partitionIndex);
    return partitionIndex;
};

const quickSort = (arr, l, r) => {
    let pivot, partitionIndex;

    if (l < r) {
        pivot = r;
        partitionIndex = partition(arr, pivot, l, r);

        quickSort(arr, l, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, r);
    }
    return arr;
};

const main = test => {
    console.log('test:', test);
    let right = test.length - 1;
    return quickSort(test, 0, right);
};

console.log('result:', main(ages));