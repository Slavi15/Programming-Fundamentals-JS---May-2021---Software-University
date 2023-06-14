function furnitureFunction(arr) {
    let regex = /^\>{2}(?<name>[A-Za-z]+)\<{2}(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
    let array = [];
    let total = 0;
    
    for(let line of arr) {
        if(line === 'Purchase') {
            break;
        };

        let match = regex.exec(line);
        if(match !== null) {
            // let name = match.groups['name'];
            // let price = match.groups['price'];
            // let qty = match.groups['qty'];
            let { name, price, qty } = match.groups;
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            array.push(name);
        };
    };

    console.log('Bought furniture:');
    for(let item of array) {
        console.log(item);
    };
    console.log(`Total money spend: ${total.toFixed(2)}`);
};

furnitureFunction([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]);