function carWash(arr) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'soap':
                result += 10;
                break;
            case 'water':
                result += (result * 0.2);
                break;
            case 'vacuum cleaner':
                result += (result * 0.25);
                break;
            case 'mud':
                result -= (result * 0.1);
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);