function equalSums(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        let sliced1 = arr.slice(0, i);
        let sliced2 = arr.slice(i + 1, arr.length);

        for(let j = 0; j < sliced1.length; j++) {
            sum1 += Number(sliced1[j]);
        }

        for(let k = 0; k < sliced2.length; k++) {
            sum2 += Number(sliced2[k]);
        }

        if(sum1 === sum2) {
            console.log(count);
            break;
        }

        if(i === arr.length - 1 && sum1 !== sum2) {
            console.log('no');
            break;
        }
        
        count += 1;
        sum1 = 0;
        sum2 = 0;
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);