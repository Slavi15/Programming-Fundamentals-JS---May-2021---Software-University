function nonDecreasingSubsequnce(arr) {
    let array = [];
    let biggest = 0;

    for(let i = 0; i < arr.length; i++) {
        if(i == 0) {
            array.push(arr[i]);
            biggest = arr[i];
        }

        if(arr[i] > biggest) {
            array.push(arr[i]);
            biggest = arr[i];
        }
    }

    console.log(array.join(' '));
}

nonDecreasingSubsequnce([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequnce([1, 2, 3, 4]);
nonDecreasingSubsequnce([20, 3, 2, 15, 6, 1]);