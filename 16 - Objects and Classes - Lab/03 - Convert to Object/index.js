function convertToObject(str) {
    let obj = JSON.parse(str);
    for(let i of Object.keys(obj)) {
        console.log(`${i}: ${obj[i]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');