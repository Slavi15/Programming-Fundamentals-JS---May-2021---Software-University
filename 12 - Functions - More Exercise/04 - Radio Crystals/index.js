function radioCrystals(arr) {
    const targetThickness = Number(arr[0]);
    arr.shift();

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    let xrayCount = 0;

    for(let i = 0; i < arr.length; i++) {
        let thickness = Number(arr[i]);
        console.log(`Processing chunk ${thickness} microns`);
        while(true) {
            if(thickness === targetThickness) {
                break;
            }
    
            if(thickness / 4 >= targetThickness) {
                cutCount += 1;
                thickness /= 4;
                continue;
            }
    
            if(thickness - (thickness * 0.2) >= targetThickness) {
                lapCount += 1;
                thickness -= (thickness * 0.2);
                continue;
            }
    
            if((thickness - 20) >= targetThickness) {
                grindCount += 1;
                thickness -= 20;
                continue;
            }
    
            if((thickness - 2) >= targetThickness) {
                etchCount += 1;
                thickness -= 2;
                continue;
            }
    
            if(thickness === targetThickness + 1) {
                etchCount += 1;
                xrayCount += 1;
                thickness -= 1;
                continue;
            }
        }
    
        if(cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            console.log('Transporting and washing');
            cutCount = 0;
        }
    
        if(lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            console.log('Transporting and washing');
            lapCount = 0;
        }
    
        if(grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log('Transporting and washing');
            grindCount = 0;
        }
    
        if(etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            console.log('Transporting and washing');
            etchCount = 0;
        }
    
        if(xrayCount > 0) {
            console.log(`X-ray x${xrayCount}`);
            xrayCount = 0;
        }
    
        console.log(`Finished crystal ${targetThickness} microns`);
    }
}

radioCrystals([1375, 50000]);