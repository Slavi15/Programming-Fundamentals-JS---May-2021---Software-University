function memoryGame(arr) {
    let sequence = arr.shift().split(' ');
    let moves = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'end') {
            console.log(`Sorry you lose :(`);
            console.log(sequence.join(' '));
            break;
        }

        moves += 1;
        let indexes = arr[i].split(' ');
        
        if((indexes[0] === indexes[1]) || 
            (indexes[0] < 0) || (indexes[0] > arr.length - 1) ||
            (indexes[1] < 0) || (indexes[1] > arr.length - 1)) {
                console.log('Invalid input! Adding additional elements to the board');
                if(sequence.length % 2 === 0) {
                    let middle = sequence.length / 2;
                    sequence.splice(middle, 0, `-${moves}a`);
                    sequence.splice(middle, 0, `-${moves}a`);
                } else if(sequence.length % 2 !== 0) {
                    let middle = Math.floor(sequence.length / 2);
                    sequence.splice(middle, 0, `-${moves}a`);
                    sequence.splice(middle, 0, `-${moves}a`);
                }
                continue;
        };

        if(sequence[indexes[0]] === sequence[indexes[1]]) {
            console.log(`Congrats! You have found matching elements - ${sequence[indexes[0]]}!`);
            sequence.splice(indexes[0], 1);
            if(indexes[1] === '0') {
                sequence.splice(indexes[1], 1);
            } else {
                sequence.splice(indexes[1] - 1, 1);
            }
        } else {
            console.log(`Try again!`);
        }

        if(sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"]);
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"]);
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"]);