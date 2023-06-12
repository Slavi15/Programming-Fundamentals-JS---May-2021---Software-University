function janNotation(arr) {
    let numbers = [];
    let operators = [];
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            numbers.push(Number(arr[i]))
        } else {
            operators.push(arr[i]);
        }
    }

    let reversedArray = numbers.reverse();

    for (let i = 0; i < operators.length; i++) {
        if (reversedArray.length < 2) {
            console.log('Error: not enough operands!');
            return
        } else {
            if (operators[i] === '+') {
                result = Math.ceil(Number(reversedArray[0]) + Number(reversedArray[1]));
            } else if (operators[i] === '-') {
                result = Math.ceil(Number(reversedArray[0]) - Number(reversedArray[1]));
            } else if (operators[i] === '*') {
                result = Math.ceil(Number(reversedArray[0]) * Number(reversedArray[1]));
            } else if (operators[i] === '/') {
                result = Math.ceil(Number(reversedArray[0]) / Number(reversedArray[1]));
            }
        }

        reversedArray.push(result);
        reversedArray.shift();
        reversedArray.shift();
    }

    if (reversedArray.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(result);
    }
}

janNotation([3, 4, '+']);
janNotation([5, 3, 4, '*', '-']);
janNotation([7, 33, 8, '-']);
janNotation([15, '/']);
janNotation([31, 2, '+', 11, '/']);
janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);