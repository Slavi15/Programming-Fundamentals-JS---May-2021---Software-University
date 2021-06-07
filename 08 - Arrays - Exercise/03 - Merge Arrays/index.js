function mergeArrays(arr1, arr2) {
    let array = [];
    let sum;

    for(let i = 0; i < arr1.length; i++) {
        if(i % 2 === 0) {
            sum = Number(arr1[i]) + Number(arr2[i]);
            array.push(sum);
        } else {
            sum = `${arr1[i]}${arr2[i]}`;
            array.push(sum);
        }
        
        if(typeof sum == 'string') {
            sum = '';
        } else if(typeof sum == 'number') {
            sum = 0;
        }
    }

    console.log(array.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);