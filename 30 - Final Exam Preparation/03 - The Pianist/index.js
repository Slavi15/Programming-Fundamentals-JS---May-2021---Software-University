function thePianist(arr) {
    let num = Number(arr.shift());
    let map = new Map();

    for(let i = 0; i < num; i++) {
        let [ piece, composer, key ] = arr[i].split('|');
        map.set(piece, {
            composer: composer,
            key: key
        });
    }

    for(let i = num; i < arr.length; i++) {
        if(arr[i] === 'Stop') {
            let sorted = new Map([...map.entries()]
                                .sort((a, b) => a[0].localeCompare(b[0])
                                            || a[1].composer - b[1].composer));
            for(let kvp of sorted) {
                console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
            };
            break;
        }

        let commands = arr[i].split('|');
        let command = commands[0];
        let piece = commands[1];
        if(command === 'Add') {
            let composer = commands[2];
            let key = commands[3];
            if(map.has(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                map.set(piece, {
                    composer: composer,
                    key: key
                });
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if(command === 'Remove') {
            if(map.has(piece)) {
                map.delete(piece);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if(command === 'ChangeKey') {
            let newKey = commands[2];
            if(map.has(piece)) {
                map.get(piece).key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
}

thePianist(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);
thePianist(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);