function needForSpeed(arr) {
    let num = Number(arr.shift());
    let map = new Map();

    for(let i = 0; i < num; i++) {
        let [ car, mileage, fuel ] = arr[i].split('|');
        map.set(car, {
            fuel: Number(fuel),
            mileage: Number(mileage)
        });
    };

    for(let i = num; i < arr.length; i++) {
        if(arr[i] === 'Stop') {
            let sorted = new Map([...map.entries()]
                                .sort((a,b) => b[1].mileage - a[1].mileage
                                            || a[0].localeCompare(b[0])));
            for(let kvp of sorted) {
                console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
            }
            break;
        }

        let commands = arr[i].split(' : ');
        let command = commands[0];
        let car = commands[1];
        if(command === 'Drive') {
            let distance = Number(commands[2]);
            let fuel = Number(commands[3]);
            if(map.get(car).fuel >= fuel) {
                map.get(car).mileage += distance;
                map.get(car).fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if(map.get(car).mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    map.delete(car);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        } else if(command === 'Refuel') {
            let fuel = Number(commands[2]);
            if(map.get(car).fuel + fuel > 75) {
                console.log(`${car} refueled with ${75 - map.get(car).fuel} liters`);
                map.get(car).fuel = 75;
            } else {
                map.get(car).fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if(command === 'Revert') {
            let kilometres = Number(commands[2]);
            map.get(car).mileage -= kilometres;
            console.log(`${car} mileage decreased by ${kilometres} kilometers`);
            if(map.get(car).mileage < 10000) {
                map.get(car).mileage = 10000;
            }
        }
    }
}

needForSpeed(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);
needForSpeed(['4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);