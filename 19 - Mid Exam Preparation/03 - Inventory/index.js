function inventoryFunction(arr) {
    let items = arr.shift().split(', ');
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Craft!') {
            console.log(items.join(', '));
            break;
        }

        let command = arr[i].split(' - ');
        if(command[0] === 'Collect') {
            if(items.includes(command[1]) === false) {
                items.push(command[1]);
            }
        } else if(command[0] === 'Drop') {
            if(items.includes(command[1]) === true) {
                let index = items.indexOf(command[1]);
                items.splice(index, 1);
            }
        } else if(command[0] === 'Combine Items') {
            let values = command[1].split(':');
            if(items.includes(values[0]) === true) {
                let index = items.indexOf(values[0]);
                items.splice(index + 1, 0, values[1]);
            }
        } else if(command[0] === 'Renew') {
            if(items.includes(command[1]) === true) {
                let index = items.indexOf(command[1]);
                items.splice(index, 1);
                items.push(command[1]);
            }
        }
    }
}

inventoryFunction([
                'Iron, Wood, Sword', 
                'Collect - Gold', 
                'Drop - Wood', 
                'Craft!'
            ]);
inventoryFunction([
                'Iron, Sword',
                'Drop - Bronze',
                'Combine Items - Sword:Bow',
                'Renew - Iron',
                'Craft!'
            ]);