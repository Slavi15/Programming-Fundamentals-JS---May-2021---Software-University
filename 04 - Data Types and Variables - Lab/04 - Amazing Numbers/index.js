function amazingNumbers(input) {
    let string = input.toString();

    let sum = 0;
    for(let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
    }

    let stringNum = sum.toString();
    if(stringNum.includes(9)) {
        console.log(`${input} Amazing? True`);
    } else {
        console.log(`${input} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);