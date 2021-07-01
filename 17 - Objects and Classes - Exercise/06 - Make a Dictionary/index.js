function makeDictionary(arr) {
    let array = [];
    let keysArray = [];
    let descArray = [];
    let objArray = [];

    for(let el of arr) {
        let parsed = JSON.parse(el);
        array.push(parsed);
    }

    for(let i of Object.keys(array)) {
        for(let j of Object.keys(array[i])) {
            keysArray.push(j);
            descArray.push(array[i][j]);
        }
    }

    for(let i = 0; i < keysArray.length; i++) {
        let obj = {
            term: keysArray[i],
            desc: descArray[i]
        }
        objArray.push(obj);
    }

    let sorted = objArray.sort((a, b) => {
        return a.term.localeCompare(b.term);
    });
    
    for(let x of sorted) {
        console.log(`Term: ${x.term} => Definition: ${x.desc}`);
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);