function airPollution(matrix, commands) {
    let formatList = [];
    let pollutedList = [];

    for (let i = 0; i < matrix.length; i++) {
        formatList.push(matrix[i].split(' ').map(Number));
    };

    for (let i = 0; i < commands.length; i++) {
        const [ command, index ] = commands[i].split(' ');

        if (command === 'breeze') {
            for (let j = 0; j < formatList[index].length; j++) {
                if ((formatList[index][j] - 15) < 0) {
                    formatList[index][j] = 0;
                } else {
                    formatList[index][j] -= 15;
                }
            }
        } else if (command === 'gale') {
            for (let j = 0; j < formatList.length; j++) {
                if ((formatList[j][index] - 20) < 0) {
                    formatList[j][index] = 0;
                } else {
                    formatList[j][index] -= 20;
                }
            }
        } else if (command === 'smog') {
            for (let j = 0; j < formatList.length; j++) {
                for (let k = 0; k < formatList[j].length; k++) {
                    formatList[j][k] += Number(index);
                }
            }
        }
    }

    for (let i = 0; i < formatList.length; i++) {
        for (let j = 0; j < formatList[i].length; j++) {
            if (formatList[i][j] >= 50) {
                pollutedList.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedList.length > 0) {
        console.log(`Polluted areas: ${pollutedList.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
};

airPollution(['5 7 72 14 4',
                '41 35 37 27 33',
                '23 16 27 42 12',
                '2 20 28 39 14',
                '16 34 31 10 24'],
                ['breeze 1', 'gale 2', 'smog 25']);
airPollution(['5 7 3 28 32',
                '41 12 49 30 33',
                '3 16 20 42 12',
                '2 20 10 39 14',
                '7 34 4 27 24'],
                ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
airPollution(['5 7 2 14 4',
                '21 14 2 5 3',
                '3 16 7 42 12',
                '2 20 8 39 14',
                '7 34 1 10 24'],
                ['breeze 1', 'gale 2', 'smog 35']);