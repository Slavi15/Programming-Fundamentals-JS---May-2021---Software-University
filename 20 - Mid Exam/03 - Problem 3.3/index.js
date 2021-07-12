function solve(arr) {
    let list = arr.shift().split('|');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Shop!') {
            let count = 0;
            for(let x of list) {
                count += 1;
                console.log(`${count}. ${x}`);
            }
            break;
        }

        let commands = arr[i].split('%');
        if(commands[0] === 'Important') {
            let product = commands[1];
            if(list.includes(product) === true) {
                let index = list.indexOf(product);
                list.splice(index, 1);
                list.unshift(product);
            } else {
                list.unshift(product);
            }
        } else if(commands[0] === 'Add') {
            let product = commands[1];
            if(list.includes(product) === false) {
                list.push(product);
            } else {
                console.log('The product is already in the list.');
            }
        } else if(commands[0] === 'Swap') {
            let product1 = commands[1];
            let product2 = commands[2];
            if(list.includes(product1) === true && list.includes(product2) === true) {
                let index1 = list.indexOf(product1);
                let index2 = list.indexOf(product2);

                list.splice(index1, 1, product2);
                list.splice(index2, 1, product1);
            } else {
                if(list.includes(product1) === false) {
                    console.log(`Product ${product1} missing!`);
                }

                if(list.includes(product2) === false) {
                    console.log(`Product ${product2} missing!`);
                }
            }
        } else if(commands[0] === 'Remove') {
            let product = commands[1];
            if(list.includes(product) === true) {
                let index = list.indexOf(product);
                list.splice(index, 1);
            } else {
                console.log(`Product ${product} isn't in the list.`);
            }
        } else if(commands[0] === 'Reversed') {
            list.reverse();
        }
    }
}

solve(["eggs|milk|bread|fish",
"Important%bread",
"Swap%eggs%tomato",
"Shop!"]);
solve(["apple|cheese|salt|bananas",
"Remove%cheese",
"Swap%salt%bananas",
"Shop!"]);