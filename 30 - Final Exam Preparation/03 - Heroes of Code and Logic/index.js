function heroesOfCode(arr) {
    let heroesCount = Number(arr.shift());
    let count = 0;
    let map = new Map();

    for(let i = 0; i < heroesCount; i++) {
        count += 1;
        let line = arr[i].split(' ');
        let hero = line[0];
        let hp = Number(line[1]);
        let mp = Number(line[2]);
        map.set(hero, {
            hp: hp,
            mp: mp
        });

        if(map.get(hero).hp > 100) {
            if(map.get(hero).mp > 200) {
                map.set(hero, {
                    hp: 100,
                    mp: 200
                });
            } else {
                map.set(hero, {
                    hp: 100,
                    mp: mp
                });
            }
        }

        if(map.get(hero).mp > 200) {
            if(map.get(hero).hp > 100) {
                map.set(hero, {
                    hp: 100,
                    mp: 200
                });
            } else {
                map.set(hero, {
                    hp: hp,
                    mp: 200
                });
            }
        }
    }

    for(let i = count; i < arr.length; i++) {
        if(arr[i] === 'End') {
            break;
        }
        let commands = arr[i].split(' - ');
        let command = commands[0];
        let hero = commands[1];
        if(command === 'CastSpell') {
            let mpNeeded = Number(commands[2]);
            let spellName = commands[3];
            if(map.get(hero).mp >= mpNeeded) {
                map.get(hero).mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spellName} and now has ${map.get(hero).mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if(command === 'TakeDamage') {
            let damage = Number(commands[2]);
            let attacker = commands[3];
            map.get(hero).hp -= damage;
            if(map.get(hero).hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${map.get(hero).hp} HP left!`)
            } else {
                map.delete(hero);
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        } else if(command === 'Recharge') {
            let amount = Number(commands[2]);
            let exceed = 0;
            map.get(hero).mp += amount;
            if(map.get(hero).mp > 200) {
                exceed = map.get(hero).mp - 200;
                map.get(hero).mp = 200;
            }
            console.log(`${hero} recharged for ${amount - exceed} MP!`);
        } else if(command === 'Heal') {
            let amount = Number(commands[2]);
            let exceed = 0;
            map.get(hero).hp += amount;
            if(map.get(hero).hp > 100) {
                exceed = map.get(hero).hp - 100;
                map.get(hero).hp = 100;
            }
            console.log(`${hero} healed for ${amount - exceed} HP!`);
        }
    }

    let sorted = new Map([...map.entries()].sort((a, b) => b[1].hp - a[1].hp
                                                            || a[0].localeCompare(b[0])));
    for(let kvp of sorted) {
        console.log(kvp[0]);
          console.log(`HP: ${kvp[1].hp}`);
          console.log(`MP: ${kvp[1].mp}`);
    }
}

heroesOfCode([2,
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);
heroesOfCode([4,
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"]);