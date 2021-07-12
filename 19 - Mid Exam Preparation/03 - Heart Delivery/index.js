function heartDelivery(arr) {
    let hood = arr.shift().split('@').map(Number);
    let index = 0;

    for(let line of arr) {
        if(line === 'Love!') {
            break;
        }

        let offset = Number(line.split(' ')[1]);
        index += offset;

        if(index >= hood.length) {
            index = 0;
        }

        if(hood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            hood[index] -= 2;
            if(hood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${index}.`);
    let missed = hood.filter(x => x > 0).length;
    if(missed === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${missed} places.`);
    }
}

heartDelivery(["10@10@10@2",
                "Jump 1",
                "Jump 2",
                "Love!"]);
heartDelivery(["2@4@2",
                "Jump 2",
                "Jump 2",
                "Jump 8",
                "Jump 3",
                "Jump 1",
                "Love!"]);