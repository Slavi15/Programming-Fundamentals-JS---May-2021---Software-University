function storeProvision(arr1, arr2) {
    let qty = 0;

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) == false) {
            qty = Number(arr1[i + 1]);
            console.log(`${arr1[i]} -> ${qty}`);
            qty = 0;
            i += 1;
            continue;
        } else {
            let index = arr2.indexOf(arr1[i]);
            qty = Number(arr1[i + 1]) + Number(arr2[index + 1]);
            console.log(`${arr1[i]} -> ${qty}`);
            qty = 0;
            i += 1;
            continue;
        }
    }

    
    for(let j = 0; j < arr2.length; j++) {
        if(arr1.includes(arr2[j]) == false) {
            qty = Number(arr2[j + 1]);
            console.log(`${arr2[j]} -> ${qty}`);
            qty = 0;
            j += 1;
            continue;
        } else {
            j += 1;
        }
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
                ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);