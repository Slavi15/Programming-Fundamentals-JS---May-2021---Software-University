function matchDates(string) {
    const regex = /(([0-9]{2})\/([A-Z][a-z]{2})\/([0-9]{4})|([0-9]{2})\-([A-Z][a-z]{2})\-([0-9]{4})|([0-9]{2})\.([A-Z][a-z]{2})\.([0-9]{4}))/g;
    let dates = [];

    let valid;
    while (valid = regex.exec(string)) {
        dates.push(valid[0]);
    };

    dates.forEach(date => {
        const [day, month, year] = date.split(/\/|\-|\./g);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    });
};

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");