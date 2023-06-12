function equalNeighbors(list) {
    let count = 0;

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (i !== list.length - 1) {
                if (list[i][j] === list[i + 1][j]) {
                    count += 1
                }
            }

            if (list[i][j] === list[i][j + 1]) {
                count += 1
            }
        }
    }

    console.log(count);
};

equalNeighbors([
                ['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']
            ]);
equalNeighbors([
                ['test', 'yo', 'yo', 'ho'],
                ['well', 'done', 'no', '6'],
                ['not', 'done', 'yet', '5']
            ]);