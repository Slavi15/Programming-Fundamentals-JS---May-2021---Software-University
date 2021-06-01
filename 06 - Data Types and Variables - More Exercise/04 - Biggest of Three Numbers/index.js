function biggestNumber(a, b, c) {
    let array = [];
    array.push(a);
    array.push(b);
    array.push(c);

    let sortedArray = array.sort((a, b) => {
        return a - b;
    });

    console.log(sortedArray.pop());
}

biggestNumber(-2, 7, 3);
biggestNumber(130, 5, 99);
biggestNumber(43, 43.2, 43.1);