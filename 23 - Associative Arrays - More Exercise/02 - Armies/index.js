function armiesFunction(arr) {
    const map = new Map();

    arr.forEach(line => {
        if (line.includes('arrives')) {
            const leader = line.slice(0, -8);

            map.set(leader, []);
        } else if (line.includes(':')) {
            const regex = /(?<leader>[A-Za-z\s]+)\: (?<army>[A-Za-z]+)\, (?<count>[\d]+)/g;

            const match = regex.exec(line);
            const { leader, army, count } = match.groups;

            if (map.has(leader)) {
                map.get(leader).push({
                    army: army,
                    count: Number(count)
                });

                if (!map.get(leader).totalCount) {
                    map.get(leader).totalCount = Number(count);
                } else {
                    map.get(leader).totalCount += Number(count);
                };
            };
        } else if (line.includes('+')) {
            const [army, count] = line.split(' + ');

            for (let kvp of map) {
                const foundIndex = map.get(kvp[0]).findIndex(item => item['army'] === army)
                if (foundIndex !== -1) {
                    map.get(kvp[0])[foundIndex]['count'] += Number(count);
                    map.get(kvp[0]).totalCount += Number(count);
                };
            };
        } else if (line.includes('defeated')) {
            const leader = line.slice(0, -9);

            if (map.has(leader)) map.delete(leader);
        };
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1].totalCount - a[1].totalCount));
    for (let kvp of sortedMap) {
        kvp[1].sort((a, b) => b.count - a.count);
    };

    let armies = [];
    for (let kvp of sortedMap) {
        if (kvp[1].totalCount) console.log(`${kvp[0]}: ${kvp[1].totalCount}`);
        for (let army of kvp[1]) {
            armies.push(`>>> ${army.army} - ${army.count}`);
        };
        console.log(armies.join('\n'));
        armies = [];
    };
};

armiesFunction(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);
armiesFunction(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);