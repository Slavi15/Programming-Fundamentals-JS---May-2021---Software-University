function solve(arr) {
    let biscuits = arr.shift().split(', ');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'No More Money') {
            for(let j = 0; j < biscuits.length; j++) {
                if(biscuits[j] == 'None') {
                    biscuits.splice(j, 1);
                    j -= 1;
                }
            }
            break;
        }

        let commands = arr[i].split(' ');
        let command = commands[0];
        let biscuit = commands[1];
        if(command === 'OutOfStock') {
            if(biscuits.includes(biscuit) === true) {
                for(let j = 0; j < biscuits.length; j++) {
                    if(biscuits[j] == biscuit) {
                        biscuits.splice(j, 1, 'None');
                    }
                }
            }
        } else if(command === 'Required') {
            let index = Number(commands[2]);
            if(index >= 0 && index < biscuits.length) {
                if(biscuits[index] !== 'None') {
                    biscuits.splice(index, 1, biscuit);
                }
            }
        } else if(command === 'Last') {
            biscuits.push(biscuit);
        }
    }

    console.log(biscuits.join(' '));
}

solve(["Vanilla, Chocolate, Raspberry, Chocolate",
"OutOfStock Chocolate",
"Required BBB 3",
"No More Money"]);
solve(["Vanilla, Chocolate, Raspberry, Vegan",
"Required SB 3",
"OutOfStock Walnuts",
"No More Money"]);
solve(["Raspberry, Raspberry, Ordinary",
"Last Chocolate",
"Required Vegan 4",
"No More Money"]);