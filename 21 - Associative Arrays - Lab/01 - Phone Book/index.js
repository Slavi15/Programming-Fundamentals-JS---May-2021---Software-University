function phoneBook(arr) {
    let list = {};

    for(let line of arr) {
        let values = line.split(' ');
        let name = values[0];
        let num = values[1];
        list[name] = num;
    }

    for(let key in list) {
        console.log(`${key} -> ${list[key]}`);
    }
}

phoneBook(['Tim 0834212554',
            'Peter 0877547887',
            'Bill 0896543112',
            'Tim 0876566344']);