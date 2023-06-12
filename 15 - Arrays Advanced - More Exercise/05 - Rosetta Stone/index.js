function rosettaStone(arr) {
    let rules = {
        0: ' ', 1: 'A', 2: 'B',
        3: 'C', 4: 'D', 5: 'E',
        6: 'F', 7: 'G', 8: 'H',
        9: 'I', 10: 'J', 11: 'K',
        12: 'L', 13: 'M', 14: 'N',
        15: 'O', 16: 'P', 17: 'Q',
        18: 'R', 19: 'S', 20: 'T',
        21: 'U', 22: 'V', 23: 'W',
        24: 'X', 25: 'Y', 26: 'Z'
    };

    let templateLines = arr.shift();
    let template = [];
    let formatList = [];
    let textList = [];

    for (let i = 0; i < templateLines; i++) {
        template.push(arr[i].split(' ').map(Number));
    };

    for (let i = 0; i < templateLines; i++) {
        arr.shift();
    };

    for (let i = 0; i < arr.length; i++) {
        formatList.push(arr[i].split(' ').map(Number));
    }

    for (let i = 0; i < formatList.length; i++) {
        for (let j = 0; j < formatList[i].length; j++) {
            formatList[i][j] += template[i % template.length][j % template[i % template.length].length];
        }
    }

    for (let i = 0; i < formatList.length; i++) {
        for (let j = 0; j < formatList[i].length; j++) {
            textList.push(rules[formatList[i][j] % 27]);
        }
    }

    console.log(textList.join(''));
}

rosettaStone([ '2',
                '59 36',
                '82 52',
                '4 18 25 19 8',
                '4 2 8 2 18',
                '23 14 22 0 22',
                '2 17 13 19 20',
                '0 9 0 22 22' ]);
rosettaStone(['2',
                '31 32',
                '74 37',
                '19 0 23 25',
                '22 3 12 17',
                '5 9 23 11',
                '12 18 10 22']);
rosettaStone(['1',
                '1 3 13',
                '12 22 14 13 25 0 4 24 23',
                '18 24 2 25 22 0 0 11 18',
                '8 25 6 26 8 23 13 4 14',
                '14 3 14 10 6 1 6 16 14',
                '11 12 2 10 24 2 13 24 0',
                '24 24 10 14 15 25 18 24 12',
                '4 24 0 8 4 22 19 22 14',
                '0 11 18 26 1 19 18 13 15',
                '8 15 14 26 24 14 26 24 14']);