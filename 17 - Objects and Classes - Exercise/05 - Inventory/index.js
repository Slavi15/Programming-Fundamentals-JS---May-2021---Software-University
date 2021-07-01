function inventoryFunction(arr) {
    let modified = arr.join(' / ').split(' / ');
    let array = [];

    for(let i = 0; i < modified.length; i++) {
        let items = modified[i + 2].split(', ').sort();
        let obj = {
            hero: modified[i],
            level: Number(modified[i + 1]),
            items: items,
        }
        array.push(obj);
        i += 2;
    }

    let sortedArray = array.sort((a, b) => {
        return a.level - b.level;
    })

    for(let element of sortedArray) {
        console.log(`Hero: ${element.hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items.join(', ')}`);
    }
}

inventoryFunction(['Isaac / 25 / Apple, GravityGun',
                    'Derek / 12 / BarrelVest, DestructionSword',
                    'Hes / 1 / Desolator, Sentinel, Antara']);