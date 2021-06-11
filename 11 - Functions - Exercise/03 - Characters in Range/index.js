function charactersInRange(str1, str2) {
    const str1Code = str1.charCodeAt();
    const str2Code = str2.charCodeAt();
    let array = [];

    if(str1Code < str2Code) {
        for(let i = str1Code + 1; i < str2Code; i++) {
            array.push(String.fromCharCode(i));
        }
    } else {
        for(let i = str2Code + 1; i < str1Code; i++) {
            array.push(String.fromCharCode(i));
        }
    }

    console.log(array.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');