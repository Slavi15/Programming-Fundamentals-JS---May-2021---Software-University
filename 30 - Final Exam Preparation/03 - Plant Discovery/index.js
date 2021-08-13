function plantDiscovery(arr) {
    let num = Number(arr.shift());
    let map = new Map();

    for(let i = 0; i < num; i++) {
        let plant = arr[i].split('<->')[0];
        let rarity = Number(arr[i].split('<->')[1]);
        if(map.has(plant)) {
            map.get(plant).rarity += rarity;
        } else {
            map.set(plant, {
                rarity: rarity,
                rating: []
            });
        }
    }

    for(let i = num; i < arr.length; i++) {
        if(arr[i] === 'Exhibition') {
            let total = 0;
            let count = 0;
            for(let kvp of map) {
                if(kvp[1].rating.length === 0) {
                    map.get(kvp[0]).rating = 0;
                    continue;
                }
                for(let i of map.get(kvp[0]).rating) {
                    total += i;
                    count += 1;
                }
                map.get(kvp[0]).rating = total / count;
                total = 0;
                count = 0;
            }
            let sorted = new Map([...map.entries()]
                                .sort((a, b) => b[1].rarity - a[1].rarity
                                            || b[1].rating - a[1].rating));
            console.log('Plants for the exhibition:');
            for(let kvp of sorted) {
                console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${kvp[1].rating.toFixed(2)}`);
            }
            break;
        }

        let [ command, line ] = arr[i].split(': ');
        let data = line.split(' - ');
        let plant = data[0];
        if(command === 'Rate') {
            let rating = Number(data[1]);
            map.get(plant).rating.push(rating);
        } else if(command === 'Update') {
            let newRarity = Number(data[1]);
            map.get(plant).rarity = newRarity;
        } else if(command === 'Reset') {
            map.get(plant).rating = [];
        } else {
            console.log('error');
        }
    }
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);