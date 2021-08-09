function piratesFunction(arr) {
    let map = new Map();

    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        count += 1;
        if(arr[i] === 'Sail') {
            break;
        }

        let splitted = arr[i].split('||');
        let town = splitted[0];
        let population = Number(splitted[1]);
        let gold = Number(splitted[2]);

        if(map.has(town)) {
            map.set(town, {
                population: map.get(town).population + population,
                gold: map.get(town).gold + gold
            })
        } else {
            map.set(town, {
                population: population,
                gold: gold
            });
        }
    }

    for(let i = count; i < arr.length; i++) {
        if(arr[i] === 'End') {
            if(map.size > 0) {
                console.log(`Ahoy, Captain! There are ${map.size} wealthy settlements to go to:`);
                let sorted = new Map([...map.entries()].sort((a, b) => b[1].gold - a[1].gold || 
                                                                        a[0].localeCompare(b[0])));
                for(let kvp of sorted) {
                    console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`);
                }
            } else {
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
            }
        }

        let line = arr[i].split('=>');
        let command = line[0];
        let town = line[1];
        if(command === 'Plunder') {
            console.log(`${town} plundered! ${line[3]} gold stolen, ${line[2]} citizens killed.`);
            let gold = Number(line[3]);
            let population = Number(line[2]);
            map.get(town).gold -= gold;
            map.get(town).population -= population;

            if(map.get(town).gold <= 0 || map.get(town).population <= 0) {
                console.log(`${town} has been wiped off the map!`);
                map.delete(town);
            }
        } else if(command === 'Prosper') {
            if(line[2] < 0) {
                console.log("Gold added cannot be a negative number!");
                continue;
            } else {
                map.get(town).gold += Number(line[2]);
                console.log(`${line[2]} gold added to the city treasury. ${town} now has ${map.get(town).gold} gold.`);
            }
        }
    }
}

piratesFunction(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
piratesFunction(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);