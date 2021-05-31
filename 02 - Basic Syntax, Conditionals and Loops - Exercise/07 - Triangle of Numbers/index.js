function triangleOfNumbers(input) {
    for(let i = 1; i <= input; i++) {
        let line = '';
        for(let j = 1; j <= i; j++) {
            line += `${i} `
        }
        line = line.trim();
        console.log(line);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);