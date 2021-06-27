function sortingFunction(arr) {
    let sorted = arr.sort((a, b) => {
        return a - b;
    });
    let arrayLength = arr.length;
    let result = [];

    for(let i = 0; i < arrayLength; i++) {
        if(i % 2 === 0) {
            result.push(sorted.pop());
        } else if(i % 2 !== 0) {
            result.push(sorted.shift());
        }
    }

    console.log(result.join(' '));
}

sortingFunction([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);