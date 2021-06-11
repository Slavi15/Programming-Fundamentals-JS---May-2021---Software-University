function smallestOfThreeInt(n1, n2, n3) {
    let array = [];
    array.push(n1);
    array.push(n2);
    array.push(n3);

    let sortedArray = array.sort((a, b) => {
        return a - b;
    })

    console.log(sortedArray[0]);
}

smallestOfThreeInt(2, 5, 3);
smallestOfThreeInt(600, 342, 123);
smallestOfThreeInt(25, 21, 4);