function processOddNumbers(arr) {
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            let num = Number(arr[i]) * 2;
            array.push(num);
        }
    }

    console.log(array.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);