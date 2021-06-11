function printNthElement(arr) {
    const step = arr.pop();
    let array = [];

    for(let i = 0; i < arr.length; i += Number(step)) {
        array.push(arr[i]);
    }

    console.log(array.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);