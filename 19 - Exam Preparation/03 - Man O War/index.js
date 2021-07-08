function manOWar(arr) {
    let ship = arr.shift().split('>');
    let warship = arr.shift().split('>');
    let maxHealth = arr.shift();

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Retire') {
            let sum1 = 0;
            let sum2 = 0;

            for(let x of ship) {
                sum1 += Number(x);
            }
            for(let x of warship) {
                sum2 += Number(x);
            }

            console.log(`Pirate ship status: ${sum1}`);
            console.log(`Warship status: ${sum2}`);
            break;
        }

        let command = arr[i].split(' ');
        if(command[0] === 'Fire') {
            if(command[1] >= 0 && command[1] < warship.length) {
                warship[command[1]] = Number(warship[command[1]]) - Number(command[2]);
                if(warship[command[1]] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }
        } else if(command[0] === 'Defend') {
            let start = Number(command[1]);
            let end = Number(command[2]);
            let damage = Number(command[3]);
            if((start >= 0 && start < ship.length) && 
                (end >= 0 && end < ship.length)) {
                for(let j = start; j <= end; j++) {
                    ship[j] = Number(ship[j]) - damage;
                    if(ship[j] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    } 
                }
            }
        } else if(command[0] === 'Repair') {
            let index = Number(command[1]);
            let health = Number(command[2]);
            if(index >= 0 && index < ship.length) {
                ship[index] += health;
                if(ship[index] > maxHealth) {
                    ship[index] = maxHealth;
                }
            }
        } else if(command[0] === 'Status') {
            let count = 0;
            let toRepair = 0.2 * maxHealth;
            for(let j = 0; j < ship.length; j++) {
                if(ship[j] < toRepair) {
                    count += 1;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
}

manOWar(["12>13>11>20>66",
            "12>22>33>44>55>32>18",
            "70",
            "Fire 2 11",
            "Fire 8 100",
            "Defend 3 6 11",
            "Defend 0 3 5",
            "Repair 1 33",
            "Status",
            "Retire"]);
manOWar(["2>3>4>5>2",
            "6>7>8>9>10>11",
            "20",
            "Status",
            "Fire 2 3",
            "Defend 0 4 11",
            "Repair 3 18",
            "Retire"]);