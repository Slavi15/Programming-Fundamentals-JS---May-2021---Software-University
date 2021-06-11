function diagonalAttack(arr) {
    let array = [];
    let sumOne = 0;
    let sumTwo = 0;

    for(let i = 0; i < arr.length; i++) {
        let modified = arr[i].split(', ');
        array.push(modified); 
    }

    for(let j = 0; j < array.length; j++) {
        for(let k = 0; k < array[j].length; k++) {
            if(j === k) {
                sumOne += Number(array[j][k]);
            }

            if(j === (array.length) - k - 1) {
                sumTwo += Number(array[k][j]);
            }
        }
    }

    if(sumOne === sumTwo) {
        for(let j = 0; j < array.length; j++) {
            for(let k = 0; k < array[j].length; k++) {
                if(j !== k && (j !== (array.length) - k - 1)) {
                    array[j].splice(k, 1, sumOne);
                }
            }
        }
    }

    console.log(array.join(`\n`).replace(/,/g, ' '))
}

diagonalAttack(['5, 3, 12, 3, 1', '11, 4, 23, 2, 5', '101, 12, 3, 21, 10', '1, 4, 5, 2, 2', '5, 22, 33, 11, 1']);
diagonalAttack(['1, 1, 1', '1, 1, 1', '1, 1, 0']);