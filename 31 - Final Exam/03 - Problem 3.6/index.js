function problemThree(arr) {
    let map = new Map();
    let areas = new Map();

    for(let line of arr) {
        if(line === 'EndDay') {
            let sorted = new Map([...map.entries()]
                                .sort((a, b) => b[1].food - a[1].food
                                        || a[0].localeCompare(b[0])));
            console.log('Animals:');
            for(let kvp of sorted) {
                console.log(` ${kvp[0]} -> ${kvp[1].food}g`);
            }

            for(let kvp of sorted) {
                if(areas.has(kvp[1].area)) {
                    areas.get(kvp[1].area).qty += 1;
                } else {
                    areas.set(kvp[1].area, {
                        qty: 1
                    });
                }
            }
            let sortedArea = new Map([...areas.entries()]
                                    .sort((a, b) => b[1].qty - a[1].qty
                                            || a[0].localeCompare(b[0])));
            console.log('Areas with hungry animals:');
            for(let kvp of sortedArea) {
                console.log(` ${kvp[0]}: ${kvp[1].qty}`);
            }
            break;
        }

        let [ command, data ] = line.split(': ');
        let [ name, food, area ] = data.split('-');
        if(command === 'Add') {
            if(map.has(name)) {
                map.get(name).food += Number(food);
            } else {
                map.set(name, {
                    food: Number(food),
                    area: area
                });
            }
        } else if(command === 'Feed') {
            if(map.has(name)) {
                map.get(name).food -= Number(food);
                if(map.get(name).food <= 0) {
                    console.log(`${name} was successfully fed`);
                    map.delete(name);
                }
            }
        }
    }
}

problemThree(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"]);
problemThree(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"]);
problemThree(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"]);