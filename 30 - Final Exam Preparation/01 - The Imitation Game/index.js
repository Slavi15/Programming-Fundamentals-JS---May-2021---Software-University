function imitationGame(arr) {
    let str = arr.shift();

    for(let line of arr) {
        if(line === 'Decode') {
            console.log(`The decrypted message is: ${str}`);
            break;
        }

        let commands = line.split('|');
        let command = commands[0];
        if(command === 'Move') {
            let endIndex = Number(commands[1]);
            let substr = str.substring(0, endIndex);
            str = str.replace(substr, '');
            let split = str.split('');
            split.push(substr);
            str = split.join('');
        } else if(command === 'Insert') {
            let index = Number(commands[1]);
            let value = commands[2];
            if(index >= 0 && index <= str.length) {
                let split = str.split('');
                split.splice(index, 0, value);
                str = split.join('');
            }
        } else if(command === 'ChangeAll') {
            let regex = new RegExp(commands[1], 'g');
            let replacement = commands[2];
            if(str.includes(commands[1])) {
                str = str.replace(regex, replacement);
            }
        }
    }
}

imitationGame(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
imitationGame(['owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);