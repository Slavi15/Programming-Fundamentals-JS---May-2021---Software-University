function bunnyKill(list) {
    let coordinates = list.pop().split(' ');
    let splittedArray = [];

    let allDamage = 0;
    let count = 0;

    for (let i = 0; i < list.length; i++) {
        splittedArray.push(list[i].split(' ').map(Number));
    }

    for (let i = 0; i < coordinates.length; i++) {
        let row = Number(coordinates[i][0]);
        let column = Number(coordinates[i][2]);
        let explodingBunny = Number(splittedArray[row][column]);

        if (splittedArray.length === 1 || splittedArray.length === 0) {
            break;
        } else {
            if (row === 0) {
                if (column === 0) {
                    splittedArray[row][column + 1] -= explodingBunny;
                    splittedArray[row + 1][column] -= explodingBunny;
                    splittedArray[row + 1][column + 1] -= explodingBunny;
                } else if (column === (splittedArray[row].length - 1)) {
                    splittedArray[row][column - 1] -= explodingBunny;
                    splittedArray[row + 1][column - 1] -= explodingBunny;
                    splittedArray[row + 1][column] -= explodingBunny;
                } else {
                    splittedArray[row][column - 1] -= explodingBunny;
                    splittedArray[row][column + 1] -= explodingBunny;
                    splittedArray[row + 1][column - 1] -= explodingBunny;
                    splittedArray[row + 1][column] -= explodingBunny;
                    splittedArray[row + 1][column + 1] -= explodingBunny;
                }
            } else if (row === (splittedArray.length - 1)) {
                if (column === 0) {
                    splittedArray[row][column + 1] -= explodingBunny;
                    splittedArray[row - 1][column] -= explodingBunny;
                    splittedArray[row - 1][column + 1] -= explodingBunny;
                } else if (column === (splittedArray[row].length - 1)) {
                    splittedArray[row][column - 1] -= explodingBunny;
                    splittedArray[row - 1][column - 1] -= explodingBunny;
                    splittedArray[row - 1][column] -= explodingBunny;
                } else {
                    splittedArray[row][column - 1] -= explodingBunny;
                    splittedArray[row][column + 1] -= explodingBunny;
                    splittedArray[row - 1][column - 1] -= explodingBunny;
                    splittedArray[row - 1][column] -= explodingBunny;
                    splittedArray[row - 1][column + 1] -= explodingBunny;
                }
            } else {
                if (column === 0) {
                    splittedArray[row][column + 1] -= explodingBunny;
                    splittedArray[row - 1][column] -= explodingBunny;
                    splittedArray[row - 1][column + 1] -= explodingBunny;
                    splittedArray[row + 1][column] -= explodingBunny;
                    splittedArray[row + 1][column + 1] -= explodingBunny;
                } else if (column === (splittedArray[row].length - 1)) {
                    splittedArray[row][column - 1] -= explodingBunny;
                    splittedArray[row - 1][column - 1] -= explodingBunny;
                    splittedArray[row - 1][column] -= explodingBunny;
                    splittedArray[row + 1][column - 1] -= explodingBunny;
                    splittedArray[row + 1][column] -= explodingBunny;
                } else {
                    splittedArray[row][column - 1] -= explodingBunny;
                    splittedArray[row][column + 1] -= explodingBunny;
                    splittedArray[row - 1][column - 1] -= explodingBunny;
                    splittedArray[row - 1][column] -= explodingBunny;
                    splittedArray[row - 1][column + 1] -= explodingBunny;
                    splittedArray[row + 1][column - 1] -= explodingBunny;
                    splittedArray[row + 1][column] -= explodingBunny;
                    splittedArray[row + 1][column + 1] -= explodingBunny;
                }
            }
        }
    }

    for (let i = 0; i < splittedArray.length; i++) {
        for (let j = 0; j < splittedArray[i].length; j++) {
            if (splittedArray[i][j] > 0) {
                count += 1;
                allDamage += splittedArray[i][j];
            }
        }
    }

    console.log(allDamage);
    console.log(count);
};

bunnyKill(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']);