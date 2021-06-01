function fuelMoney(distance, passenger, price) {
    let fuelIncrease = passenger * 0.1;
    let fuel = (distance / 100) * (7 + fuelIncrease);
    let money = fuel * price;
    console.log(`Needed money for that trip is ${money.toFixed(2)}lv.`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);