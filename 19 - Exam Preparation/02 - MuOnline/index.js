function muOnline(str) {
    let arr = str.split('|');
    let health = 100;
    let bitcoinCount = 0;
    let rooms = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ')[0];
        let value = arr[i].split(' ')[1];
        
        if(command === 'potion') {
            rooms += 1;
            health += Number(value);
            if(health > 100) {
                health -= Number(value);
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${value} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if(command === 'chest') {
            rooms += 1;
            bitcoinCount += Number(value);
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= Number(value);
            rooms += 1;
            if(health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                break;
            }
        }
    }

    if(health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoinCount}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');