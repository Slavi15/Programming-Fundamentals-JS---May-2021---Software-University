function arrayRotation(arr, num) {
    for(let i = 0; i < num; i++) {
        let shifted = arr.shift();
        arr.push(shifted);
    }

    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);