function palindromeIntegers(arr) {
    for(let i = 0; i < arr.length; i++) {
        let string = arr[i].toString();
        let reversed = string.split('').reverse().join('');

        if(arr[i] == reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);