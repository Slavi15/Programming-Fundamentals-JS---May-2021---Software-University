function buildWall(arr) {
    let sorted = arr.sort((a, b) => { return a - b }).reverse();
    let length = sorted.length;
    let price = 0;
    let array = [];

    for(let i = 0; i < sorted.length; i++) {
        for(let j = sorted[i]; j < 30; j++) {
            let yards = length * 195;
            price += yards * 1900;
            array.push(yards);

            for(let k = i + 1; k < sorted.length; k++) {
                sorted[k] += 1;
            }
        }
        length -= 1;
    }

    console.log(array.join(', '));
    console.log(`${price} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);