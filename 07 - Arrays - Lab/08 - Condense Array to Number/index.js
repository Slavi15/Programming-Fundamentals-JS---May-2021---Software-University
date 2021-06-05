function condenseArrayToNumber(arr) {
    let sum = 0;

    if(arr.length == 1) {
        console.log(arr[0]);
        return;
    } else if(arr.length == 2) {
        console.log(Number(arr[0]) + Number(arr[1]));
        return;
    }

    if(arr.length > 2) {
        while(true) {
            for(let i = 0; i < arr.length; i++) {
                sum = Number(arr[i]) + Number(arr[i + 1]);
                arr.splice(i, 1, sum);
                sum = 0;
            }
            arr.pop();
            if(arr.length == 2) {
                console.log(Number(arr[0]) + Number(arr[1]));
                return;
            }
        }
    }
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1])