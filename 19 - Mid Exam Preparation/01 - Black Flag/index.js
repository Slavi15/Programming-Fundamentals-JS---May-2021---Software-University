function blackFlag(arr) {
    let days = Number(arr[0]);
    let plunderForDay = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let count = 0;
    let plunder = 0;
    for(let i = 0; i < days; i++) {
        count += 1;
        plunder += plunderForDay;

        if(count % 15 === 0) {
            plunder += (0.5 * plunderForDay);
            plunder -= (0.3 * plunder);
            continue;
        }

        if(count % 3 === 0) {
            plunder += (0.5 * plunderForDay);
        }
        
        if(count % 5 === 0) {
            plunder -= (0.3 * plunder);
        }
    }

    if(plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (plunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);