function secretChat(arr) {
    let str = arr.shift();
    let array = [];

    for(let line of arr) {
        if(line === 'Reveal') {
            console.log(`You have a new text message: ${str}`);
            break;
        }

        let commands = line.split(':|:');
        let command = commands[0];
        if(command === 'InsertSpace') {
            let index = Number(commands[1]);
            for(let i = 0; i < str.length; i++) {
                if(i === index) {
                    array.push(' ');
                    array.push(str[i]);
                } else {
                    array.push(str[i]);
                }
            }
            str = array.join('');
            console.log(str);
            array = [];
        } else if(command === 'Reverse') {
            let substr = commands[1];
            if(str.includes(substr)) {
                str = str.replace(substr, '');
                let splitted = str.split('');
                let reversed = substr.split('').reverse().join('');
                splitted.push(reversed);
                str = splitted.join('');
                console.log(str);
            } else {
                console.log('error');
            }
        } else if(command === 'ChangeAll') {
            let substr = commands[1];
            let replacement = commands[2];
            let regex = new RegExp(substr, 'g');
            str = str.replace(regex, replacement);
            console.log(str);
        }
    }
}

secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
secretChat(['Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);