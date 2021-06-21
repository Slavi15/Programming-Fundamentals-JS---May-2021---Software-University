function arrayManipulations(arr) {
    let array = arr.shift();
    let modified = array.split(' ');
    let commands = arr.join(' ').split(' ');

    for(let i = 0; i < commands.length; i++) {
        if(commands[i] === 'Add') {
            i++;
            modified.push(commands[i]);
        } else if(commands[i] === 'Remove') {
            i++;
            let index = modified.indexOf(commands[i]);
            modified.splice(index, 1);
        } else if(commands[i] === 'RemoveAt') {
            i++;
            modified.splice(commands[i], 1);
        } else if(commands[i] === 'Insert') {
            i++;
            modified.splice(commands[i + 1], 0, commands[i]);
            i++;
        }
    }

    console.log(modified.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);