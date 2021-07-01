function numbersFunction(input) {
    let modified = input.split(' ');
    let array = [];
    let sum = 0;

    for(let num of modified) {
        sum += Number(num);
    }

    let average = sum / modified.length;

    let sorted = modified.sort((a, b) => {
        return a - b;
    }).reverse();

    for(let i = 0; i < sorted.length; i++) {
        if(i == 5) {
            break;
        }
        if(sorted[i] > average) {
            array.push(sorted[i]);
        }
    }

    if(array.length > 0) {
        console.log(array.join(' '));
    } else {
        console.log('No');
    }
}

numbersFunction('10 20 30 40 50');
numbersFunction('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbersFunction('1');
numbersFunction('-1 -2 -3 -4 -5 -6');