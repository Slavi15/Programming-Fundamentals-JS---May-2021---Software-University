function censoredWords(strOne, strTwo) {
    const regex = new RegExp(`${strTwo}`, 'g');
    console.log(strOne.replace(regex, '*'.repeat(strTwo.length)));
};

censoredWords("A small sentence with some words", "small");