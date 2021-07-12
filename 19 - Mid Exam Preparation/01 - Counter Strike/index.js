function counterStrike(arr) {
    let energy = Number(arr.shift());
    let battleCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'End of battle') {
            console.log(`Won battles: ${battleCount}. Energy left: ${energy}`);
            break;
        }

        if(energy >= arr[i]) {
            battleCount += 1;
            energy -= Number(arr[i]);
        } else {
            console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${energy} energy`);
            break;
        }

        if(battleCount % 3 === 0) {
            energy += battleCount;
        }
    }
}

counterStrike(["100",
                "10",
                "10",
                "10",
                "1",
                "2",
                "3",
                "73",
                "10"]);
counterStrike(["200",
                "54",
                "14",
                "28",
                "13",
                "End of battle"]);