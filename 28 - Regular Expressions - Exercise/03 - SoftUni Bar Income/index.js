function softUniBarIncome(arr) {
    const regex = /%(?<name>[A-Z](?:[a-z]*))%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/;
    let total = 0;
    for(let line of arr) {
        if(line === 'end of shift') {
            break;
        }

        let match = regex.exec(line);
        if(match !== null) {
            let { name, product, count, price } = match.groups;
            total += Number(count) * Number(price);
            console.log(`${name}: ${product} - ${Number(Number(count) * Number(price)).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"]);
softUniBarIncome(["%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"]);