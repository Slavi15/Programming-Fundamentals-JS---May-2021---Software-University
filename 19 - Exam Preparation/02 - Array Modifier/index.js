function arrayModifier(arr) {
    let numbers = arr.shift().split(' ');
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'end') {
            break;
        };

        let values = arr[i].split(' ');
        if(values[0] === 'swap') {
            [numbers[values[1]], numbers[values[2]]] = [numbers[values[2]], numbers[values[1]]]
        } else if(values[0] === 'multiply') {
            let result = Number(numbers[values[1]]) * Number(numbers[values[2]]);
            numbers[values[1]] = result;
        } else if(values[0] === 'decrease') {
            for(let j = 0; j < numbers.length; j++) {
                numbers[j] = Number(numbers[j]) - 1;
            }
        }
    }

    console.log(numbers.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);