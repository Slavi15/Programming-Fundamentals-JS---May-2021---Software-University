function addAndSubtract(a, b, c) {
    let numberSum = 0;
    let result = 0;
    
    function sum() {
        numberSum = a + b;
    }

    function subtract() {
        sum();
        result = numberSum - c;
        return result;
    }

    console.log(subtract());
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);