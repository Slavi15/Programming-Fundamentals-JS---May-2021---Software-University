function bombNumbers(arr1, arr2) {
    let specialNumber = Number(arr2[0]);
    let distance = Number(arr2[1]);

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] == specialNumber) {
            let startIndex = Math.max(0, i - distance);
            arr1.splice(startIndex, (distance * 2 + 1));
        }
    }

    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// bombNumbers([1, 2, 3, 4, 5, 6], [2, 3]);