function wordTracker(arr) {
    let words = arr.shift().split(' ');
    let map = new Map();

    for(let word of words) {
        map.set(word, 0);
    };

    for(let word of arr) {
        if(map.has(word)) {
            map.set(word, (map.get(word) + 1));
        }
    }

    let sorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    for(let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

wordTracker(['this sentence',
            'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','your','task']);