function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let modified = arr.join(' ').replace(/\|/g, ' ').split(' ');

    for(let i = 0; i < modified.length; i++) {
        if(i % 2 === 0) {
            roomCount += 1;
            if(modified[i] === 'potion') {
                health += Number(modified[i + 1]);
                if(health > 100) {
                    health -= Number(modified[i + 1]);
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${modified[i + 1]} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                i++;
                continue;
            } else if(modified[i] === 'chest') {
                coins += Number(modified[i + 1]);
                console.log(`You found ${modified[i + 1]} coins.`);
                i++;
                continue;
            } else {
                health -= Number(modified[i + 1]);
                if(health > 0) {
                    console.log(`You slayed ${modified[i]}.`);
                    i++;
                    continue;
                } else if(health <= 0) {
                    console.log(`You died! Killed by ${modified[i]}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);