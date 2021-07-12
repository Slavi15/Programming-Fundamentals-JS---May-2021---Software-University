function solve(arr) {
    let ordersCount = Number(arr.shift());
    let allPrice = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        count += 1;
        let capsulePrice = Number(arr[i]);
        let days = Number(arr[i + 1]);
        let capsules = Number(arr[i + 2]);

        let price = (days * capsules) * capsulePrice;
        allPrice += price;
        console.log(`The price for the coffee is: $${price.toFixed(2)}`);

        if(count == ordersCount) {
            break;
        }
        i += 2;
    }

    console.log(`Total: $${allPrice.toFixed(2)}`);
}

solve(["1",
        "1.53",
        "30",
        "8"]);
solve(["2",
        "4.99",
        "31",
        "3",
        "0.35",
        "31",
        "5"]);
solve(["1",
        "9.223",
        "31",
        "433"]);