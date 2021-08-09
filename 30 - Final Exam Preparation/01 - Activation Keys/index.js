function activationKeys(arr) {
    let key = arr.shift();

    for(let line of arr) {
        if(line === 'Generate') {
            console.log(`Your activation key is: ${key}`);
            break;
        }

        let commands = line.split('>>>');
        if(commands[0] === 'Contains') {
            let substring = commands[1];
            if(key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if(commands[0] === 'Flip') {
            let start = Number(commands[2]);
            let end = Number(commands[3]);
            let substring = key.substring(start, end);
            if(commands[1] === 'Upper') {
                key = key.replace(substring, substring.toUpperCase());
            } else if(commands[1] === 'Lower') {
                key = key.replace(substring, substring.toLowerCase());
            }
            console.log(key);
        } else if(commands[0] === 'Slice') {
            let start = Number(commands[1]);
            let end = Number(commands[2]);
            let sliced = key.slice(start, end);
            key = key.replace(sliced, '');
            console.log(key);
        }
    }
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);