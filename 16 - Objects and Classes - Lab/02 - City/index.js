function cityFunction(obj) {
    for(let i of Object.keys(obj)) {
        console.log(`${i} -> ${obj[i]}`);
    }
}

cityFunction({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: '1000'
});