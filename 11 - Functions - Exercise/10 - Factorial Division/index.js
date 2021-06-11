function factorialDivision(n1, n2) {
    let resultOne = 1;
    let resultTwo = 1;

    for(let i = 1; i <= n1; i++) {
        resultOne *= i;
    }

    for(let j = 1; j <= n2; j++) {
        resultTwo *= j;
    }

    let result = resultOne / resultTwo;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);