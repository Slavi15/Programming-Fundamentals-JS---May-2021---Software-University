function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    let modified = arr.join(' ').split(' ');
    
    for(let i = 0; i < modified.length; i++) {
        if(modified[i] === 'Buy') {
            if(inventory.includes(modified[i + 1]) === false) {
                inventory.push(modified[i + 1]);
            }
            i += 1;
        } else if(modified[i] === 'Trash') {
            if(inventory.includes(modified[i + 1]) === true) {
                inventory.splice(inventory.indexOf(modified[i + 1]), 1);
            }
        } else if(modified[i] === 'Repair') {
            if(inventory.includes(modified[i + 1]) === true) {
                inventory.push(modified[i + 1]);
                inventory.splice(inventory.indexOf(modified[i + 1]), 1);
            }
        } else if(modified[i] === 'Upgrade') {
            let equipment = modified[i + 1].replace(/\-/g, ' ').split(' ');
            if(inventory.includes(equipment[0]) === true) {
                let index = inventory.indexOf(equipment[0]);
                inventory.splice(index + 1, 0, `${equipment[0]}:${equipment[1]}`);
            }
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);