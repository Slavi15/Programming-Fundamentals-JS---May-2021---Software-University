function magicMatrices(arr) {
    let sumRow = 0;
    let rowArray = [];

    let sumColumn = 0;
    let columnArray = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            sumRow += Number(arr[i][j]);
            sumColumn += Number(arr[j][i]);
        }
        rowArray.push(sumRow);
        columnArray.push(sumColumn);
        sumRow = 0;
        sumColumn = 0;
    }

    if(rowArray.every(e => e == rowArray[0])) {
        if(columnArray.every(f => f == columnArray[0])) {
            console.log(true);
        }
    } else {
        console.log(false);
    }
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);