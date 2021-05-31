function sumOfOddNumbers(input) {
    const num = input;
    let sum = 0;
    let count = 0;

    for(let i = 1; i <= 100; i++) {
        if(i % 2 !== 0) {
            console.log(i);
            sum += i;
            count += 1;

            if(count == num) {
                break;
            }
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);