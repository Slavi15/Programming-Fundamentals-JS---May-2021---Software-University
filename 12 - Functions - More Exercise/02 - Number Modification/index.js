function numberModification(num) {
    let string = num.toString();
    let count = 0;
    let sum = 0;
    let average = 0;

    for(let i = 0; i < string.length; i++) {
        count += 1;
        sum += Number(string[i]);

        if(i == string.length - 1) {
            average = sum / count;

            if(average <= 5) {
                string += '9';
                continue;
            } else {
                console.log(string);
                break;
            }
        }
    }
}

numberModification(101);
numberModification(5835);