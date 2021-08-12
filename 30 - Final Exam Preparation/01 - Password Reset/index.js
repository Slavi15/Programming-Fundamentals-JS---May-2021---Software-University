function passwordReset(arr) {
    let str = arr.shift();
    let array = [];

    for(let line of arr) {
        if(line === 'Done') {
            console.log(`Your password is: ${str}`);
            break;
        }

        let commands = line.split(' ');
        let command = commands[0];
        if(command === 'TakeOdd') {
            for(let i = 0; i < str.length; i++) {
                if(i % 2 !== 0) {
                    array.push(str[i]);
                }
            }
            str = array.join('');
            console.log(str);
            array = [];
        } else if(command === 'Cut') {
            let index = Number(commands[1]);
            let length = Number(commands[2]);
            let substr = str.substring(index, index + length);
            str = str.replace(substr, '');
            console.log(str);
        } else if(command === 'Substitute') {
            let substring = new RegExp(`\\${commands[1]}`, 'g');
            let replacement = commands[2];
            if(str.includes(commands[1])) {
                str = str.replace(substring, replacement);
                console.log(str);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);