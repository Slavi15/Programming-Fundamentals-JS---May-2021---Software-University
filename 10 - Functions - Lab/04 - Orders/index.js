function ordersFunction(product, quantity) {
    let price = 0;

    switch(product) {
        case 'coffee':
            price = quantity * 1.5;
            break;
        case 'coke':
            price = quantity * 1.4;
            break;
        case 'water':
            price = quantity * 1;
            break;
        case 'snacks':
            price = quantity * 2;
            break;
    }

    console.log(price.toFixed(2));
}

ordersFunction('water', 5);
ordersFunction('coffee', 2);