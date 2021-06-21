function pointsValidation(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let firstResult = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let secondResult = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let result = 0;

    let x = 0;
    let y = 0;

    if(x1 === x2) {
        result += Math.abs(y1 - y2);
    } else if(y1 === y2) {
        result += Math.abs(x1 - x2);
    } else {
        y = Math.abs(y1 - y2);
        x = Math.abs(x1 - x2);
        result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    if(Number.isInteger(firstResult)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(secondResult)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(result)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);