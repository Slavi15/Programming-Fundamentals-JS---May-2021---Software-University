function arenaTier(arr) {
    const map = new Map();

    arr.forEach(line => {
        if (line.includes('->')) {
            const [gladiator, technique, skill] = line.split(' -> ');

            if (!map.has(gladiator)) {
                map.set(gladiator, [
                    {
                        technique: technique,
                        skill: Number(skill)
                    }
                ]);
            } else {
                const foundIndex = map.get(gladiator).findIndex(item => item.technique === technique);

                if (foundIndex === -1) {
                    map.get(gladiator).push({
                        technique: technique,
                        skill: Number(skill)
                    });
                } else if (map.get(gladiator)[foundIndex].skill < Number(skill)) {
                    map.get(gladiator)[foundIndex].skill = Number(skill)
                };
            };

            for (let kvp of map) {
                const sum = kvp[1].reduce((previousValue, currentValue) => previousValue + currentValue.skill, 0);
                map.get(kvp[0]).totalSkills = sum;
            };
        } else if (line.includes('vs')) {
            const [gladiatorOne, gladiatorTwo] = line.split(' vs ');

            let techniquesOne = [];
            let techniquesTwo = [];
            let match = [];

            if (map.has(gladiatorOne) && map.has(gladiatorTwo)) {
                for (let object of map.get(gladiatorOne)) {
                    techniquesOne.push(object['technique']);
                };

                for (let object of map.get(gladiatorTwo)) {
                    techniquesTwo.push(object['technique']);
                };

                for (let technique of techniquesOne) {
                    if (techniquesTwo.includes(technique)) match.push(technique);
                };

                if (match.length) {
                    if (map.get(gladiatorOne).totalSkills > map.get(gladiatorTwo).totalSkills) {
                        map.delete(gladiatorTwo);
                    } else {
                        map.delete(gladiatorOne);
                    };
                };
            };
        } else if (line === 'Ave Cesar') {
            for (let kvp of map) {
                kvp[1].sort((a, b) => b.skill - a.skill
                                        || a['technique'].localeCompare(b['technique']));
            };
            const sortedMap = new Map([...map.entries()].sort((a, b) => b[1].totalSkills - a[1].totalSkills
                                                                        || a[0].localeCompare(b[0])));
            
            for (let kvp of sortedMap) {
                console.log(`${kvp[0]}: ${kvp[1].totalSkills} skill`);
                kvp[1].forEach(item => {
                    console.log(`- ${item.technique} <!> ${item.skill}`);
                });
            };
        };
    });
};

arenaTier(['Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']);
arenaTier(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);