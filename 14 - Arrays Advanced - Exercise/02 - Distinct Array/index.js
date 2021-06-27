function distinctArray(arr) {
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        if(array.includes(arr[i])) {
            arr.splice(i, 1);
            i -= 1;
            continue;
        }
        array.push(arr[i]);
    }

    console.log(arr.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);