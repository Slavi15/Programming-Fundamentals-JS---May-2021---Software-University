function replaceChars(str) {
    let array = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[i + 1] && i === str.length - 2) {
            array.push(str[i]);
            array.push(str[i + 1]);
            break;
        }

        if(str[i] === str[i + 1] && i === str.length - 2) {
            array.push(str[i]);
            break;
        }

        if(str[i] !== str[i + 1]) {
            array.push(str[i]);
        }
    }

    console.log(array.join(''));
}

replaceChars('aaaaabbbbbcdddeeeedssaa');
replaceChars('qqqwerqwecccwd');