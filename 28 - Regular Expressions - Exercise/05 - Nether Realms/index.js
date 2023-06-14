function netherRealms(string) {
    const array = string.split(/[\, ]+/);
    const map = new Map();

    const healthRegex = /([^0-9\+\-\*\/\.]?)/;

    array.forEach(demon => {
        let healthCharacters = [];
        const numbersArray = demon.split(/[^0-9\-\.\+]+/).map(Number);
        let operators = [];

        for (let char of demon) {
            if (char.match(healthRegex)[0] !== '') healthCharacters.push(char.match(healthRegex)[0]);
            if (char === '*' || char === '/') operators.push(char);
        };
    
        let codes = [];
        for (let letter of healthCharacters) {
            codes.push(letter.charCodeAt(0));
        };

        const health = codes.reduce((previous, current) => previous + current);
        let damage = numbersArray.length ? numbersArray.reduce((previous, current) => previous + current) : 0;

        operators.forEach(operator => {
            if (operator === '*') {
                damage *= 2;
            } else if (operator === '/') {
                damage /= 2;
            };
        });

        map.set(demon, {
            health: health,
            damage: damage
        });
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    for (let kvp of sortedMap) {
        console.log(`${kvp[0]} - ${kvp[1]['health']} health, ${kvp[1]['damage'].toFixed(2)} damage`);
    };
};

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');