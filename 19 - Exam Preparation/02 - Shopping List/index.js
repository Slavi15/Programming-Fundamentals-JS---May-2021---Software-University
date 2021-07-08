function shoppingList(arr) {
    let list = arr.shift().split('!');
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Go Shopping!') {
            break;
        }

        let command = arr[i].split(' ');
        if(command[0] === 'Urgent') {
            if(list.includes(command[1]) === false) {
                list.unshift(command[1]);
            }
        } else if(command[0] === 'Unnecessary') {
            if(list.includes(command[1]) === true) {
                let index = list.indexOf(command[1]);
                list.splice(index, 1);
            }
        } else if(command[0] === 'Correct') {
            if(list.includes(command[1]) === true) {
                let index = list.indexOf(command[1]);
                list.splice(index, 1);
                list.splice(index, 0, command[2]);
            }
        } else if(command[0] === 'Rearrange') {
            if(list.includes(command[1]) === true) {
                let index = list.indexOf(command[1]);
                list.splice(index, 1);
                list.push(command[1]);
            }
        }
    }

    console.log(list.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
                "Unnecessary Milk",
                "Urgent Tomatoes",
                "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
                "Urgent Salt",
                "Unnecessary Grapes",
                "Correct Pepper Onion",
                "Rearrange Grapes",
                "Correct Tomatoes Potatoes",
                "Go Shopping!"]);