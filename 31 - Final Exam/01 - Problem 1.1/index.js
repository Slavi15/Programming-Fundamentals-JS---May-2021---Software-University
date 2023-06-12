function problemOne(arr) {
    let str = arr.shift();

    for(let line of arr) {
        if(line === 'Finish') {
            break;
        }

        let commands = line.split(' ');
        let command = commands[0];
        if(command === 'Replace') {
            let currentChar = commands[1];
            let newChar = commands[2];
            let regex = new RegExp(currentChar, 'g');
            str = str.replace(regex, newChar);
            console.log(str);
        } else if(command === 'Cut') {
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);
            if(startIndex >= 0 && endIndex < str.length) {
                let substr = str.substring(startIndex, endIndex + 1);
                str = str.replace(substr, '');
                console.log(str);
            } else {
                console.log('Invalid indices!');
            }
        } else if(command === 'Make') {
            if(commands[1] === 'Upper') {
                str = str.toUpperCase();
                console.log(str);
            } else if(commands[1] === 'Lower') {
                str = str.toLowerCase();
                console.log(str);
            }
        } else if(command === 'Check') {
            let string = commands[1];
            if(str.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        } else if(command === 'Sum') {
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);
            if(startIndex >= 0 && endIndex < str.length) {
                let substr = str.substring(startIndex, endIndex + 1);
                let sum = 0;
                for(let i = 0; i < substr.length; i++) {
                    sum += substr.charCodeAt(i);
                }
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        }
    }
}

problemOne(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]);
problemOne(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"]);