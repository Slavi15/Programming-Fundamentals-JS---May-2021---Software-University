function searchForNumber(arr1, arr2) {
    let numberOfElements = Number(arr2[0]);
    let deleteCount = Number(arr2[1]);
    let numberToSearch = Number(arr2[2]);

    let count = 0;
    let array = [];

    for(let i = 0; i < numberOfElements; i++) {
        array.push(arr1[i]);
    }

    array.splice(0, deleteCount);

    for(let i = 0; i < array.length; i++) {
        if(array[i] == numberToSearch) {
            count += 1;
        }
    }

    console.log(`Number ${numberToSearch} occurs ${count} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);