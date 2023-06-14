function valueString(arr) {
    function isUpperCase(string) {
        return /^[A-Z]*$/.test(string);
    };

    const string = arr[0];
    const command = arr[1];
    let letters = [];

    if (command === 'LOWERCASE') {
        for (let char of string) {
            if (!isUpperCase(char) && char.match(/[a-z]/i)) letters.push(char);
        };
    } else if (command === 'UPPERCASE') {
        for (let char of string) {
            if (isUpperCase(char) && char.match(/[a-z]/i)) letters.push(char);
        };
    };

    let sum = 0;
    for (let letter of letters) {
        sum += letter.charCodeAt(0);
    };

    console.log(`The total sum is: ${sum}`);
};

valueString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
valueString(["AC/DC", "UPPERCASE"]);