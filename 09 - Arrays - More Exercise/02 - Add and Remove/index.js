function addAndRemove(arr) {
    let num = 1;
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'add') {
            array.push(num);
            num += 1;
        } else if(arr[i] == 'remove') {
            array.pop();
            num += 1;
        }
    }

    if(array.length <= 0) {
        console.log('Empty');
    } else {
        console.log(array.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);