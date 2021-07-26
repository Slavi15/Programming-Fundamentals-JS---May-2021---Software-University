function piccoloFunction(arr) {
    let array = [];

    for(let line of arr) {
        let [direction, tag] = line.split(', ');

        if(direction === 'IN') {
            if(!array.includes(tag)) {
                array.push(tag);
            }
        } else if(direction === 'OUT') {
            if(array.includes(tag)) {
                let index = array.indexOf(tag);
                array.splice(index, 1);
            }
        }
    }

    if(array.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = array.sort((a, b) => a.localeCompare(b));
        console.log(sorted.join(`\n`));
    }
}

piccoloFunction(['IN, CA2844AA',
                    'IN, CA1234TA',
                    'OUT, CA2844AA',
                    'IN, CA9999TT',
                    'IN, CA2866HI',
                    'OUT, CA1234TA',
                    'IN, CA2844AA',
                    'OUT, CA2866HI',
                    'IN, CA9876HH',
                    'IN, CA2822UU']);
piccoloFunction(['IN, CA2844AA',
                    'IN, CA1234TA',
                    'OUT, CA2844AA',
                    'OUT, CA1234TA']);