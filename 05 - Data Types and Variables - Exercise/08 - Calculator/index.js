function calculatorFunction(firstNum, operator, secondNum) {
    let result = eval(`${firstNum} ${operator} ${secondNum}`);
    console.log(result.toFixed(2));
}

calculatorFunction(5, '+', 10);
calculatorFunction(25.5, '-', 3);