function starEnigma(arr) {
    const messagesCount = Number(arr.shift());
    const letters = ['s', 't', 'a', 'r', 'S', 'T', 'A', 'R'];

    const regex = /^(?:[^\@\-\!\:\>]*)?\@(?<planet>[A-Za-z]+)(?:[^\@\-\!\:\>]*)?\:(?<planetPopulation>[0-9]+)\!(?<attackType>[A-Z]{1})\!(?:[^\@\-\!\:\>]*)?\-\>(?<soldierCount>[0-9]+)(?:[^\@\-\!\:\>]*)?$/;
    const map = new Map();

    map.set('A', []);
    map.get('A').totalCount = 0;
    map.set('D', []);
    map.get('D').totalCount = 0;

    arr.forEach(code => {
        let key = 0;

        for (let char of code) {
            if (letters.includes(char)) key += 1;
        };

        let array = code.split('');
        for (let i = 0; i < array.length; i++) {
            const code = array[i].charCodeAt(0) - key;

            array.splice(i, 1, String.fromCharCode(code));
        };

        const theOrderCode = array.join('');

        const match = regex.exec(theOrderCode);
        if (match !== null) {
            const { planet, planetPopulation, attackType, soldiersCount } = match.groups;

            map.get(attackType).push({
                planet: planet,
                population: planetPopulation,
                soldiers: soldiersCount
            });

            map.get(attackType).totalCount += 1;
        };
    });

    
    const sortedMap = new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    for (let kvp of sortedMap) {
        kvp[1].sort((a, b) => a['planet'].localeCompare(b['planet']));
    };

    for (let kvp of sortedMap) {
        kvp[0] === 'A' ? console.log(`Attacked planets: ${kvp[1].totalCount}`) : console.log(`Destroyed planets: ${kvp[1].totalCount}`);
        if (kvp[1].length) {
            let output = [];
            for (let planetObject of kvp[1]) {
                output.push(`-> ${planetObject.planet}`);
            };
            console.log(output.join('\n'));
        };
    };
};

starEnigma(["2",
    "STCDoghudd4=63333$D$0A53333",
    "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma(["3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR"]);