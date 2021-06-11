function steamAccount(arr) {
    let array = [];
    const games = arr.shift().split(' ');
    let modified = arr.join(' ').split(' ');

    for(let k = 0; k < games.length; k++) {
        array.push(games[k]);
    };

    for(let i = 0; i < modified.length; i++) {
        if(modified[i] === 'Play!') {
            break;
        }

        if(modified[i] === 'Install') {
            i += 1;
            if(array.includes(modified[i]) === false) {
                array.push(modified[i]);
            }
        } else if(modified[i] === 'Uninstall') {
            i += 1;
            if(array.includes(modified[i]) === true) {
                for(let j = 0; j < array.length; j++) {
                    if(array[j] === modified[i]) {
                        array.splice(j, 1);
                    }
                }
            }
        } else if(modified[i] === 'Update') {
            i += 1;
            if(array.includes(modified[i]) === true) {
                for(let j = 0; j < array.length; j++) {
                    if(array[j] === modified[i]) {
                        array.splice(j, 1);
                        array.push(modified[i]);
                    }
                }
            }
        } else if(modified[i] === 'Expansion') {
            i += 1;
            let expansion = modified[i].split('-');
            if(array.includes(expansion[0]) === true) {
                for(let j = 0; j < array.length; j++) {
                    if(array[j] === expansion[0]) {
                        array.splice(j + 1, 0, `${expansion[0]}:${expansion[1]}`);
                    }
                }
            }
        }
    };

    console.log(array.join(' '));
}

steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);