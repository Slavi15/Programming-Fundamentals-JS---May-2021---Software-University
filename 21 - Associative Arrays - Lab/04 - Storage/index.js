function storageFunction(arr) {
    let map = new Map();

    for(let line of arr) {
        let [food, value] = line.split(' ');

        if(map.has(food)) {
            map.set(food, Number(value) + Number(map.get(food)));
        } else {
            map.set(food, value);
        }
    }

    for(let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

storageFunction(['tomatoes 10',
                    'coffee 5',
                    'olives 100',
                    'coffee 40']);