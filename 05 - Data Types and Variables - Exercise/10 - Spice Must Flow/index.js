function spiceMustFlow(num) {
    let startingYield = num;
    let daysCount = 0;
    let extracted = 0;
    let leftYield = 0;

    while(startingYield >= 100) {
        daysCount += 1;
        extracted += startingYield;
        leftYield += extracted - 26;
        startingYield -= 10;
        extracted = 0;
    }

    if(leftYield >= 26) {
        leftYield -= 26;
    }

    console.log(`${daysCount}\n${leftYield}`);
}

spiceMustFlow(111);