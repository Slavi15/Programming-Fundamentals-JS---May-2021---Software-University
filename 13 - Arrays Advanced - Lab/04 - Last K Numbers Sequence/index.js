function lastSequence(n, k) {
    let result = [1];
    
    for(let i = 1; i < n; i++) {
        let elements = result.slice(-k);
        let current = 0;

        for(let j = 0; j < elements.length; j++) {
            current += elements[j];
        }

        result.push(current);
    }

    console.log(result.join(' '));
}

lastSequence(6, 3);
lastSequence(8, 2);
lastSequence(9, 5);