function hardWords(arr) {
    const array = arr[0].split(' ');
    
    array.forEach(word => {
        if (word.includes('_')) {
            if (word[word.length - 1] !== '_') {
                for (let chars of arr[1]) {
                    let substr = word.substring(0, word.length - 1);
                    if (chars.length === substr.length) {
                        if (word[word.length - 1] === '.') {
                            const index = array.indexOf(`${substr}.`);
                            array.splice(index, 1, `${chars}.`);
                        } else if (word[word.length - 1] === ',') {
                            const index = array.indexOf(`${substr},`);
                            array.splice(index, 1, `${chars},`);
                        };
                    };
                };
            } else {
                for (let chars of arr[1]) {
                    if (chars.length === word.length) {
                        const index = array.indexOf(word);
                        array.splice(index, 1, chars);
                    };
                };
            };
        };
    });

    console.log(array.join(' '));
};

hardWords([
            'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
            ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
        ]);