function gradesFunction(num) {
    if(num < 3) {
        console.log(`Fail (2)`);
    } else if(num >= 3 && num < 3.5) {
        console.log(`Poor (${num.toFixed(2)})`);
    } else if(num >= 3.5 && num < 4.5) {
        console.log(`Good (${num.toFixed(2)})`);
    } else if(num >= 4.5 && num < 5.5) {
        console.log(`Very good (${num.toFixed(2)})`);
    } else if(num >= 5.5) {
        console.log(`Excellent (${num.toFixed(2)})`);
    }
}

gradesFunction(3.33);
gradesFunction(4.5);
gradesFunction(2.99);