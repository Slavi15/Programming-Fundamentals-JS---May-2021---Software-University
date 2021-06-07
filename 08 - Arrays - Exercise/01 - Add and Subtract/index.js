function addAndSubtract(arr) {
    let modifiedArray = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for(let i = 0; i < arr.length; i++) {
        originalSum += Number(arr[i]);

        if(arr[i] % 2 === 0) {
            arr[i] += i;
            modifiedArray.push(arr[i]);
        } else {
            arr[i] -= i;
            modifiedArray.push(arr[i]);
        }
    }

    for(let j = 0; j < modifiedArray.length; j++) {
        modifiedSum += Number(modifiedArray[j]);
    }

    console.log(modifiedArray);
    console.log(`${originalSum}`);
    console.log(`${modifiedSum}`);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);