function oddOccurences(str) {
    let elements = str.split(' ');
    let map = new Map();
    let array = [];
    let finalArray = [];

    for(let i = 0; i < elements.length; i++) {
        array.push(elements[i].toLowerCase());
    }

    for(let word of array) {
        if(map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    for(let kvp of map) {
        if(kvp[1] % 2 !== 0) {
            finalArray.push(kvp[0]);
        }
    }

    console.log(finalArray.join(' '));
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');