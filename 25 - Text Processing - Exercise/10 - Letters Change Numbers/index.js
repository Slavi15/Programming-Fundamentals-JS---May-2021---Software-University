function lettersChangeNumbers(str) {
    function isUpperCase(string) {
        return /^[A-Z]*$/.test(string);
    };

    const array = str.split(' ');
    let sumArray = [];

    array.forEach(line => {
        let number = Number(line.substring(1, line.length - 1));

        if (isUpperCase(line[0])) {
            const position = line[0].toLowerCase().charCodeAt(0) - 96;
            number /= position;
        } else {
            const position = line[0].charCodeAt(0) - 96;
            number *= position;
        };

        if (isUpperCase(line[line.length - 1])) {
            const position = line[line.length - 1].toLowerCase().charCodeAt(0) - 96;
            number -= position;
        } else {
            const position = line[line.length - 1].charCodeAt(0) - 96;
            number += position;
        };

        sumArray.push(number);
    });

    const sum = sumArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(sum.toFixed(2));
};

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f H456z');
lettersChangeNumbers('a1A');