function sumFirstAndLast(arr) {
    const first = arr[0];
    const last = arr[arr.length - 1];
    const sum = Number(first) + Number(last);
    console.log(sum);
}

sumFirstAndLast([20, 30, 40]);
sumFirstAndLast([10, 17, 22, 33]);
sumFirstAndLast([11, 58, 69]);