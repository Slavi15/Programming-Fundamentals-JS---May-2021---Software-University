function worldTour(arr) {
    let str = arr.shift();
    let array = [];

    for(let line of arr) {
        if(line === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${str}`);
            break;
        }

        let commands = line.split(':');
        let command = commands[0];
        if(command === 'Add Stop') {
            let index = Number(commands[1]);
            let string = commands[2];
            if(index >= 0 && index < str.length) {
                for(let i = 0; i < str.length; i++) {
                    if(i === index) {
                        array.push(string);
                        array.push(str[i]);
                    } else {
                        array.push(str[i]);
                    }
                }
                str = array.join('');
                console.log(str);
                array = [];
            }
        } else if(command === 'Remove Stop') {
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);
            if(startIndex >= 0 && endIndex < str.length) {
                let substr = str.substring(startIndex, endIndex + 1);
                str = str.replace(substr, '');
                console.log(str);
            }
        } else if(command === 'Switch') {
            let oldString = commands[1];
            let newString = commands[2];
            let regex = new RegExp(oldString, 'g');
            if(str.includes(oldString)) {
                str = str.replace(regex, newString);
                console.log(str);
            }
        }
    }
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);