function catalogueFunction(arr) {
    const map = new Map();

    const array = arr.map(el => el.split(' : '));
    array.forEach(([product, price]) => {
        if (!map.has(product[0])) {
            map.set(product[0], [
                `${product}: ${price}`
            ]);
        } else {
            map.get(product[0]).push(`${product}: ${price}`);
        };
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    for (let kvp of sortedMap) {
        kvp[1].sort((a, b) => a.localeCompare(b));
    };

    for (let kvp of sortedMap) {
        console.log(kvp[0]);
        for (let items of kvp[1]) {
            console.log(`  ${items}`);
        };
    };
};

catalogueFunction(['Appricot : 20.4',
                    'Fridge : 1500',
                    'TV : 1499',
                    'Deodorant : 10',
                    'Boiler : 300',
                    'Apple : 1.25',
                    'Anti-Bug Spray : 15',
                    'T-Shirt : 10']);