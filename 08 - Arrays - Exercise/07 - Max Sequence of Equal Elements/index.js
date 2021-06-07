function maxSequence(arr) {
    let currentLength = 1;
    let currentStart = 0;
    let longestLength = 1;
    let longestStart = 0;

    let array = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == arr[i - 1]) {
            currentLength += 1;

            if(currentLength > longestLength) {
                longestLength = currentLength;
                longestStart = currentStart;
            }
        } else {
            currentLength = 1;
            currentStart = i;
        }
    }

    for(let j = longestStart; j < longestStart + longestLength; j++) {
        array.push(arr[j]);
    }
    
    console.log(array.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);