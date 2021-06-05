function evenOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenSum += Number(arr[i]);
        } else if(arr[i] % 2 !== 0) {
            oddSum += Number(arr[i]);
        }
    }

    let diff = evenSum - oddSum;
    console.log(diff);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
evenOddSubtraction([3, 5, 7, 9]);
evenOddSubtraction([2, 4, 6, 8, 10]);