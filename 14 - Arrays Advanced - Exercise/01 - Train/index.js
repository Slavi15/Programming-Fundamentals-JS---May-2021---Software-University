function trainFunction(arr) {
    let wagons = arr[0].split(' ');
    let maxCapacity = Number(arr[1]);
    arr.shift();
    arr.shift();
    let array = arr.join(' ').split(' ');

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'Add') {
            i++;
            wagons.push(array[i]);
            continue;
        }

        for(let j = 0; j < wagons.length; j++) {
            if(array[i] <= (maxCapacity - Number(wagons[j]))) {
                wagons[j] = Number(wagons[j]) + Number(array[i]);
                break;
            }
        }
    }

    console.log(wagons.join(' '));
}

trainFunction(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
trainFunction(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);