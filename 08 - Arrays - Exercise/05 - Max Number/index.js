function maxNumber(arr) {
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        let sliced = arr.slice(i + 1, arr.length);
        if(arr[i] > Math.max(...sliced)) {
            array.push(arr[i]);
        }
    }

    console.log(array.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);