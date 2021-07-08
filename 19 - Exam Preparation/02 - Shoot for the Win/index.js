function shootForTheWin(arr) {
    let targets = arr.shift().split(' ');
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'End') {
            console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
            break;
        }

        let value = Number(targets[arr[i]]);
        if(arr[i] <= (targets.length - 1)) {
            if(targets[arr[i]] == -1) {
                continue;
            }

            targets.splice(arr[i], 1, -1);
            count += 1;

            for(let j = 0; j < targets.length; j++) {
                if(j == arr[i] ) {
                    continue;
                }

                if(targets[j] > value && targets[j] != -1) {
                    targets[j] = Number(targets[j]) - value;
                } else if(targets[j] <= value && targets[j] != -1) {
                    targets[j] = Number(targets[j]) + value;
                }
            } 
        }
    }
}

shootForTheWin(["24 50 36 70",
                "0",
                "4",
                "3",
                "1",
                "End"]);
shootForTheWin(["30 30 12 60 54 66",
                "5",
                "2",
                "4",
                "0",
                "End"]);