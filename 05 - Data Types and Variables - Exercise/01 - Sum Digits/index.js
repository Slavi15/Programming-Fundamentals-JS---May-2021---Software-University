function sumDigits(input) {
    let string = input.toString();

    let sum = 0;
    for(let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);