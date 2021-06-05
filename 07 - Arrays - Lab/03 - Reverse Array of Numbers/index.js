function reverseNumberArray(num, arr) {
    let array = [];
    for(let i = 0; i < num; i++) {
        array.push(arr[i]);
    }
    console.log(array.reverse().join(' '));
}

reverseNumberArray(3, [10, 20, 30, 40, 50]);
reverseNumberArray(4, [-1, 20, 99, 5]);
reverseNumberArray(2, [66, 43, 75, 89, 47]);