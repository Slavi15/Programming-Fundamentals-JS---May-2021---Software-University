function rageQuit(string) {
    console.log(string);
    const regex = /[0-9]/g;

    let uniqueLetters = [];
    let output = [];

    const letters = string.split(regex).filter(n => n);
    const numbers = string.match(regex).map(Number);

    const lettersString = letters.join('');
    for (let i = 0; i < lettersString.length; i++) {
        if (!uniqueLetters.includes(lettersString[i].toLowerCase())) uniqueLetters.push(lettersString[i].toLowerCase());
    };

    for (let i = 0; i < letters.length; i++) {
        output.push(`${letters[i].toUpperCase()}`.repeat(numbers[i]));
    };

    console.log(`Unique symbols used: ${uniqueLetters.length}`);
    console.log(output.join(''));
};

rageQuit('a3');
rageQuit('aSd2&5s@1');