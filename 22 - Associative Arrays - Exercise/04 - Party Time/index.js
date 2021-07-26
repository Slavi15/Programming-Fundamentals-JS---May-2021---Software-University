function partyTime(arr) {
    let vip = [];
    let regular = [];
    let partyIndex = arr.indexOf('PARTY');

    for(let i = 0; i < partyIndex; i++) {
        if(/^-?[\d.]+(?:e-?\d+)?$/.test(arr[i][0]) === true) {
            vip.push(arr[i]);
        } else {
            regular.push(arr[i]);
        }
    }

    for(let i = partyIndex + 1; i < arr.length; i++) {
        if(vip.includes(arr[i])) {
            let index = vip.indexOf(arr[i]);
            vip.splice(index, 1);
            continue;
        }

        if(regular.includes(arr[i])) {
            let index = regular.indexOf(arr[i]);
            regular.splice(index, 1);
        }
    }

    console.log(vip.length + regular.length);
    console.log(vip.join('\n'));
    console.log(regular.join('\n'));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);