function passwordGenerator(arr) {
    let vowels = ['a', 'o', 'i', 'e', 'u'];
    let characters = [];
    let concatArray = arr[0].concat('', arr[1]).split('');

    concatArray.forEach((char, index) => {
        if (vowels.includes(char)) {
            characters.push({
                char: char,
                id: index
            });
        };
    });

    let thirdLength = arr[2].length;
    let index = 0;
    for (let character of characters) {
        character['char'] = arr[2][index];
        index += 1;
        if (index > (thirdLength - 1)) index = 0;
    };

    for (let char of characters) {
        concatArray.splice(char['id'], 1, char['char'].toUpperCase());
    };

    console.log(`Your generated password is ${concatArray.reverse().join('')}`);
};

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);