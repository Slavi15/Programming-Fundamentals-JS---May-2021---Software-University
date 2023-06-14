function raceFunction(arr) {
    let list = arr.shift().split(', ');
    const regex1 = /[A-Za-z]+/g;
    const regex2 = /[0-9]/g;
    let map = new Map();
    let total = 0;
    
    for(let line of arr) {
        if(line === 'end of race') {
            break;
        };

        let name = line.match(regex1).join('');
        let digits = line.match(regex2).map(Number);
        if(list.includes(name)) {
            for(let num of digits) {
                total += num;
            }
            if(map.has(name)) {
                map.set(name, {
                    total: map.get(name).total + total
                });
            } else {
                map.set(name, {
                    total: total
                });
            };
        };
        total = 0;
    };

    let sorted = new Map([...map.entries()].sort((a, b) => b[1].total - a[1].total));
    let count = 0;
    for(let kvp of sorted) {
        count += 1;
        if(count === 1) {
            console.log(`1st place: ${kvp[0]}`);
        } else if(count === 2) {
            console.log(`2nd place: ${kvp[0]}`);
        } else if(count === 3) {
            console.log(`3rd place: ${kvp[0]}`);
        } else {
            break;
        };
    };
};

raceFunction(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]);