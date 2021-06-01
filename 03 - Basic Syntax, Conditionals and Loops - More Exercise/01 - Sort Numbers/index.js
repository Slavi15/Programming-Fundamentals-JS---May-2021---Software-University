function sortNumbers(l, m, n) {
    let array = [];
    array.push(l);
    array.push(m);
    array.push(n);

    let sortedArray = array.sort((a, b) => {
        return a - b;
    }).reverse();

    for(let i = 0; i < sortedArray.length; i++) {
        console.log(sortedArray[i]);
    }
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2)