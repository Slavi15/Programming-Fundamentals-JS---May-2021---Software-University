function negativeOrPositive(arr) {
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            array.unshift(arr[i]);
        } else if(arr[i] >= 0) {
            array.push(arr[i]);
        }
    }

    console.log(array.join(`\n`));
}

negativeOrPositive([7, -2, 8, 9]);
negativeOrPositive([3, -2, 0, -1]);