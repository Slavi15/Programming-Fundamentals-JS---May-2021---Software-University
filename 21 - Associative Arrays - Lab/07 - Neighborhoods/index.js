function neighborHoodFunction(arr) {
    let neighborhoods = arr.shift().split(', ');
    let map = new Map();

    for(let neigh of neighborhoods) {
        map.set(neigh, []);
    }

    for(let line of arr) {
        let [neighborhood, person] = line.split(' - ');

        if(map.has(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = new Map([...map.entries()].sort((a, b) => b[1].length - a[1].length));
    
    for(let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for(let i of kvp[1]) {
            console.log(`--${i}`);
        }
    }
}

neighborHoodFunction(['Abbey Street, Herald Street, Bright Mews',
                        'Bright Mews - Garry',
                        'Bright Mews - Andrea',
                        'Invalid Street - Tommy',
                        'Abbey Street - Billy']);