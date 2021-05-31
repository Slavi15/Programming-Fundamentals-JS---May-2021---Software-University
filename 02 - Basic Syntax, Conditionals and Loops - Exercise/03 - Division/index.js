function divisionFunction(input) {
    let divisionNum = 0;

    if(input % 2 == 0) {
        divisionNum = 2;
    }
    if(input % 3 == 0) {
        divisionNum = 3;
    }
    if(input % 6 == 0) {
        divisionNum = 6;
    }
    if(input % 7 == 0) {
        divisionNum = 7;
    }
    if(input % 10 == 0) {
        divisionNum = 10;
    }

    if(divisionNum == 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divisionNum}`);
    }
}

divisionFunction(30);
divisionFunction(15);
divisionFunction(12);
divisionFunction(1643);