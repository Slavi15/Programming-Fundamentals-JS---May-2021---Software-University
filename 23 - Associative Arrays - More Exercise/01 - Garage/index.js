function garageFunction(arr) {
    const map = new Map();

    const regex = /\:/g;

    for (let line of arr) {
        let [ key, data ] = line.split(' - ');
        let replaced = data.replace(regex, ' -');

        if (map.has(key) === false) {
            map.set(key, [ 
                replaced
            ]);
        } else {
            map.get(key).push(replaced)
        };
    };

    for (let kvp of map) {
        console.log(`Garage № ${kvp[0]}`);
        for (let inner of kvp[1]) {
            console.log(`--- ${inner}`);
        };
    };
};

garageFunction(['1 - color: blue, fuel type: diesel', 
                '1 - color: red, manufacture: Audi', 
                '2 - fuel type: petrol', 
                '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garageFunction(['1 - color: green, fuel type: petrol',
                '1 - color: dark red, manufacture: WV',
                '2 - fuel type: diesel',
                '3 - color: dark blue, fuel type: petrol']);