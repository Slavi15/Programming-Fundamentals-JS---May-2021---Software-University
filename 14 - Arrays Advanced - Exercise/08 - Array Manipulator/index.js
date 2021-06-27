function arrayManipulator(arr1, arr2) {
    let modified = arr2.join(' ').split(' ');

    for(let i = 0; i < modified.length; i++) {
        if(modified[i] === 'print') {
            break;
        } else if(modified[i] === 'add') {
            arr1.splice(modified[i + 1], 0, Number(modified[i + 2]));
            i += 2;
        } else if(modified[i] === 'addMany') {
            i += 1;
            let index = Number(modified[i]);
            i += 1;  
            while(modified[i].length < 3) {
                arr1.splice(index, 0, Number(modified[i]));
                index += 1;
                i += 1;
            }
            i -= 1;
        } else if(modified[i] === 'contains') {
            if(arr1.includes(Number(modified[i + 1]))) {
                console.log(arr1.indexOf(Number(modified[i + 1])))
            } else {
                console.log(-1);
            }
            i += 1;
        } else if(modified[i] === 'remove') {
            arr1.splice(modified[i + 1], 1);
            i += 1;
        } else if(modified[i] === 'shift') {
            for(let j = 0; j < modified[i + 1]; j++) {
                let shifted = arr1.shift();
                arr1.push(shifted);
            }
            i += 1;
        } else if(modified[i] === 'sumPairs') {
            for(let j = 0; j < arr1.length; j++) {
                if(typeof arr1[j + 1] === 'undefined') {
                    break;
                }
                let sum = Number(arr1[j]) + Number(arr1[j + 1]);
                arr1.splice(j, 2, sum);
            }
        }
    }

    console.log(arr1);
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);