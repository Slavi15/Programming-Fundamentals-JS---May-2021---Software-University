function specialNumbers(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        let string = i.toString();
        for(let j = 0; j < string.length; j++) {
            sum += Number(string[j]);
        }

        if(sum == 5 || sum == 7 || sum == 11) {
            console.log(`${string} -> True`);
        } else {
            console.log(`${string} -> False`);
        }

        sum = 0;
    }
}

specialNumbers(15);