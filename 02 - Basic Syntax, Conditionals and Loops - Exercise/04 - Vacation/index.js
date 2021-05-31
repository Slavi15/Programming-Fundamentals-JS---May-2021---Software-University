function vacationFunction(num, groupType, day) {
    let price = 0;

    if(groupType == 'Students') {
        switch(day) {
            case 'Friday':
                price = 8.45 * num;
                break;
            case 'Saturday':
                price = 9.8 * num;
                break;
            case 'Sunday':
                price = 10.46 * num;
                break;
        }

        if(num >= 30) {
            price -= (price * 0.15);
        }
    } else if(groupType == 'Business') {
        switch(day) {
            case 'Friday':
                price = 10.9 * num;

                if(num >= 100) {
                    price -= (10.9 * 10)
                }
                break;
            case 'Saturday':
                price = 15.6 * num;

                if(num >= 100) {
                    price -= (15.6 * 10)
                }
                break;
            case 'Sunday':
                price = 16 * num;

                if(num >= 100) {
                    price -= (16 * 10)
                }
                break;
        }
    } else if(groupType == 'Regular') {
        switch(day) {
            case 'Friday':
                price = 15 * num;
                break;
            case 'Saturday':
                price = 20 * num;
                break;
            case 'Sunday':
                price = 22.5 * num;
                break;
        }

        if(num >= 10 && num <= 20) {
            price -= (price * 0.05);
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacationFunction(30, 'Students', 'Sunday');
vacationFunction(40, 'Regular', 'Saturday');