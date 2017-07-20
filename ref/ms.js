const ages = [2, 7, 19, 12, 17, 15, 3, 22, 5, 7, 4, 14];
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
const merge = (arr, l, m, r) => {
    let i, j, k;
    let n1 = m - l + 1;
    let n2 = r - m;

    /* create temp arrays */
    let L = [],
        R = [];

    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i += 1) {
        L[i] = arr[l + i];
    }
    for (j = 0; j < n2; j += 1) {
        R[j] = arr[m + 1 + j];
    }

    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    /* Copy the remaining elements of L[], if there
    are any */
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    /* Copy the remaining elements of R[], if there
    are any */
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
};

/* l is for left index and r is right index of the
sub-array of arr to be sorted */
const mergeSort = (arr, l, r) => {
    if (l < r) {
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        let m = Math.floor((l + r) / 2);

        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
};

const main = (test) => {
    let arr_size = test.length;
    mergeSort(test, 0, arr_size - 1);
    return test;
};

console.log(main(ages));