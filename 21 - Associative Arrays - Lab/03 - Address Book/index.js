function addressBook(arr) {
    let addressBook = {};

    for(let line of arr) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    };
}

addressBook(['Tim:Doe Crossing',
                'Bill:Nelson Place',
                'Peter:Carlyle Ave',
                'Bill:Ornery Rd']);