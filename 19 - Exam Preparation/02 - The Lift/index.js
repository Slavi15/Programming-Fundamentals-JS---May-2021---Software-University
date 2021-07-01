function theLift(arr) {
    let people = Number(arr[0]);
    let liftList = arr[1].split(' ');

    for(let i = 0; i < liftList.length; i++) {
        if(people <= 0) {
            break;
        }
        let free = 4 - Number(liftList[i]);
        if(free > 0) {
            if((people - free) < 0) {
                liftList[i] = `${people}`;
                people = 0;
                break;
            }
            people -= free;
            liftList[i] = '4';
        }
    }

    if(people === 0 && liftList[liftList.length - 1] < 4) {
        console.log(`The lift has empty spots!`);
        console.log(liftList.join(' '));
    } else if(people > 0 && liftList[liftList.length - 1]) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(liftList.join(' '));
    } else if(people === 0 && liftList[liftList.length - 1] === '4') {
        console.log(liftList.join(' '));
    }
}

theLift(['15', '0 0 0 0 0']);
theLift(['20', '0 2 0']);
theLift(['4', '0 0']);