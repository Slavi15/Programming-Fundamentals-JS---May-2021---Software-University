function bombNumbers(arr1, arr2) {
    let index = arr1.indexOf(arr2[0]);

    while (index > -1) {
      let start = Math.max(index - arr2[1], 0);
      arr1.splice(index, arr2[1]+1);
      arr1.splice(start, arr2[1]);
      index = arr1.indexOf(arr2[0]);
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