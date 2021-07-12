function treasureHunt(arr) {
    let chest = arr.shift().split('|');
    let stolen = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Yohoho!') {
            break;
        }

        let command = arr[i].split(' ');
        if(command[0] === 'Loot') {
            command.shift();
            for(let j = 0; j < command.length; j++) {
                if(chest.includes(command[j]) === false) {
                    chest.unshift(command[j]);
                }
            }
        } else if(command[0] === 'Drop') {
            let index = Number(command[1]);
            if(index >= 0 && index < chest.length) {
                chest.push(chest[index]);
                chest.splice(index, 1);
            }
        } else if(command[0] === 'Steal') {
            let count = Number(command[1]);
            for(let j = 0; j < count; j++) {
                let popped = chest.pop();
                stolen.push(popped);
                if(j === count - 1) {
                    console.log(stolen.reverse().join(', '));
                    break;
                }
            }
        }
    }

    let itemsCount = 0;
    let lengthSum = 0;
    if(chest.length <= 0) {
        console.log('Failed treasure hunt.');
    } else {
        for(let i = 0; i < chest.length; i++) {
            itemsCount += 1;
            lengthSum += chest[i].length;
        }

        let averageGain = lengthSum / itemsCount;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
                "Loot Wood Gold Coins",
                "Loot Silver Pistol",
                "Drop 3",
                "Steal 3",
                "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
                "Loot Silver Medals Coal",
                "Drop -1",
                "Drop 1",
                "Steal 6",
                "Yohoho!"]);