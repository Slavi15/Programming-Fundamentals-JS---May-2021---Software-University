function firstAndLastKElements(arr) {
    let k = arr.shift();
    
    let first = [];
    let second = [];

    for(let i = 0; i < k; i++) {
        first.push(arr[i]);
    }

    for(let i = arr.length - 1; i >= arr.length - k; i--) {
        second.push(arr[i]);
    }

    console.log(first.join(' '));
    console.log(second.reverse().join(' '));
}

firstAndLastKElements([2, 7, 8, 9]);
firstAndLastKElements([3, 6, 7, 8, 9]);
firstAndLastKElements([3, 5, 6, 7, 8, 3, 4, 7]);