function townsFunction(arr) {
    let modified = arr.join(' | ').split(' | ');
    let obj = {};

    for(let i = 0; i < modified.length; i++) {
        obj.town = modified[i];
        obj.latitude = Number(modified[i + 1]).toFixed(2);
        obj.longitude = Number(modified[i + 2]).toFixed(2);
        console.log(obj);
        i += 2;
        obj = {};
    }
}

townsFunction(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);