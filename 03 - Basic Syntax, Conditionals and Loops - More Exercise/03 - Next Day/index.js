function nextDay(year, month, day) {
    if(year % 2 == 0) {
        if(month % 2 !== 0) {
            if(day == 30) {
                day = 1;
                month += 1;
            } else {
                day += 1;
            }
        } else if(month % 2 === 0) {
            if(day == 28 || day == 29 || day == 31) {
                if(month == 2) {
                    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                        if(day == 29) {
                            day = 1;
                            month += 1;
                        } else if(day == 28) {
                            day += 1;
                        }
                    } else {
                        if(day == 28) {
                            day = 1;
                            month += 1;
                        } else {
                            day += 1;
                        }
                    }
                }
                
                if(month == 12) {
                    day = 1;
                    month = 1;
                    year += 1;
                } else {
                    day = 1;
                    month += 1;
                }
            } else {
                day += 1;
            }
        }
    } else if(year % 2 !== 0) {
        if(month % 2 !== 0) {
            if(day == 31) {
                day = 1;
                month += 1;
            } else {
                day += 1;
            }
        } else if(month % 2 === 0) {
            if(day == 28 || day == 29 || day == 30) {
                day = 1;
                
                if(month == 12) {
                    month = 1;
                    year += 1;
                } else {
                    month += 1;
                }
            } else {
                day += 1;
            }
        }
    }

    console.log(`${year}-${month}-${day}`);
}

nextDay(2016, 9, 30);
nextDay(2016, 2, 28);