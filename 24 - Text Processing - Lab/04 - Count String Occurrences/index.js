function countStringOccurrences(strOne, strTwo) {
    let count = 0;
    const array = strOne.split(' ');

    array.forEach(char => {
        if (char === strTwo) count += 1;
    });

    console.log(count);
};

countStringOccurrences("This is a word and it also is a sentence", "is");