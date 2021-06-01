function bitcoinMining(arr) {
    let goldInLev = 0;
    let bitcoinPrice = 11949.16;
    let bitcoinCount = 0;
    let totalBTC = 0;
    let count = 0;

    let daysArray = [];

    for(let i = 0; i < arr.length; i++) {
        count += 1;

        if(count % 3 == 0) {
            arr[i] -= (arr[i] * 0.3);
        }

        goldInLev += arr[i] * 67.51;

        if(goldInLev >= bitcoinPrice) {
            bitcoinCount += Math.floor(goldInLev / bitcoinPrice);
            goldInLev -= bitcoinPrice * bitcoinCount;
            totalBTC += bitcoinCount;
            bitcoinCount = 0;
            daysArray.push(count);
        }
    }

    if(daysArray.length > 0) {
        console.log(`Bought bitcoins: ${totalBTC}`);
        console.log(`Day of the first purchased bitcoin: ${daysArray.shift()}`);
        console.log(`Left money: ${goldInLev.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${totalBTC}`);
        console.log(`Left money: ${goldInLev.toFixed(2)} lv.`);
    }
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);