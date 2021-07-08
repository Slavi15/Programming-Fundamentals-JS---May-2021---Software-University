function movingTarget(arr) {
    let targets = arr.shift().split(' ');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'End') {
            console.log(targets.join('|'));
            break;
        }

        let command = arr[i].split(' ');
        let index = Number(command[1]);
        let lastIndex = targets.length - 1;

        if(command[0] === 'Shoot') {
            if(index <= lastIndex && index >= 0) {
                targets[index] = Number(targets[index]) - Number(command[2]);

                if(targets[index] <= 0 && index >= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if(command[0] === 'Add') {
            if(index <= lastIndex && index >= 0) {
                targets.splice(index, 0, command[2]);
            } else {
                console.log('Invalid placement!');
            }
        } else if(command[0] === 'Strike') {
            let radius = Number(command[2]);
            let start = index - radius;
            let end = index + radius;

            if(index <= lastIndex && index >= 0 && start >= 0 && end <= lastIndex) {
                targets.splice(start, end);
            } else {
                console.log('Strike missed!');
            }
        }
    }
}

movingTarget(["52 74 23 44 96 110",
                "Shoot 5 10",
                "Shoot 1 80",
                "Strike 2 1",
                "Add 22 3",
                "End"]);
movingTarget(["1 2 3 4 5",
                "Strike 0 1",
                "End"]);