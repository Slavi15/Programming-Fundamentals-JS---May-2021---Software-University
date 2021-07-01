function pcStore(arr) {
    let price = 0;
    let customer = arr.pop();

    if(arr.length == 0) {
        console.log('Invalid order!');
        return;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            price += Number(arr[i]);
        } else {
            console.log('Invalid price!');
        }
    }

    let tax = price * 0.2;
    let priceWithTax = price + (price * 0.2);
    if(customer === 'special') {
        priceWithTax -= (priceWithTax * 0.1);
    }

    if(price > 0) {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${price.toFixed(2)}$
        Taxes: ${tax.toFixed(2)}$
        -----------
        Total price: ${priceWithTax.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}

pcStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
pcStore(['1023',  '15',  '-20', '-5.50', '450',  '20',  '17.66',  '19.30', 'regular']);
pcStore(['regular']);