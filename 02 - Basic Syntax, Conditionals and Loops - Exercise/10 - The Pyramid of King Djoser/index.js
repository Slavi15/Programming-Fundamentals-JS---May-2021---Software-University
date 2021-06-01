function thePyramidOfKingDjoser(base, increment) {
    const startBase = base;
    let stoneAmount = 0;
    let marbleAmount = 0;
    let lapisAmount = 0;
    let goldAmount = 0;
    let totalStone = 0;

    let count = 0;
    for(let i = startBase; i > 0; i--) {
        let allBase = Math.pow(base, 2);
        count += 1;

        if(base < 3) {
            goldAmount += allBase;
            break;
        }

        base -= 2;

        totalStone += Math.pow(base, 2);
        stoneAmount += Math.pow(base, 2);

        if(count % 5 !== 0) {
            marbleAmount += (allBase - stoneAmount);
        } else if(count % 5 == 0) {
            lapisAmount += (allBase - stoneAmount);
        }

        stoneAmount = 0;
    }

    let stone = Math.ceil(totalStone * increment);
    let marble = Math.ceil(marbleAmount * increment);
    let lapis = Math.ceil(lapisAmount * increment);
    let gold = Math.ceil(goldAmount * increment);
    let height = Math.floor(count * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);