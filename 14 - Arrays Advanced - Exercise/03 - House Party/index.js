function houseParty(arr) {
    let array = [];
    let names = arr.join(' ').split(' ');
    
    for(let i = 0; i < names.length; i++) {
        if(names[i] === 'is' || names[i] === 'going!') {
            names.splice(i, 1);
            i -= 1;
        }
    }

    for(let i = 0; i < names.length; i++) {
        if(names[i + 1] !== 'not') {
            if(array.includes(names[i])) {
                console.log(`${names[i]} is already in the list!`);
            } else {
                array.push(names[i]);
            }
        } else if(names[i + 1] === 'not'){
            if(array.includes(names[i])) {
                array.splice(array.indexOf(names[i]), 1);
            } else {
                console.log(`${names[i]} is not in the list!`);
            }
            i++;
        }
    }

    console.log(array.join(`\n`));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);