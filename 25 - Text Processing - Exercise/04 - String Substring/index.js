function stringSubstring(str1, str2) {
    let arr = str2.split(' ');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() === str1.toLowerCase()) {
            console.log(str1);
            break;
        } else if(i === arr.length - 1 && arr[i].toLowerCase() !== str1.toLowerCase()) {
            console.log(`${str1} not found!`);
            break;
        }
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');