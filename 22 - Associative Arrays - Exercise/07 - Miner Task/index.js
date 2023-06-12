function minerTask(arr) {
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + Number(arr[i + 1]));
        } else {
            map.set(arr[i], Number(arr[i + 1]));
        }
        i += 1;
    };

    for(let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    };
};

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);