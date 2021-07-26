function wordOccurences(arr) {
    let map = new Map();

    for(let line of arr) {
        if(map.has(line)) {
            map.set(line, map.get(line) + 1);
        } else {
            map.set(line, 1);
        }
    }

    let sorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    for(let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence",
                "Here", "is", "another", "sentence", "And",
                "finally", "the", "third", "sentence"]);