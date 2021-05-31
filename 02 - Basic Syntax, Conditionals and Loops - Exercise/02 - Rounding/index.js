function roundingFunction(num, precision) {
    if(precision > 15) {
        precision = 15;
    };

    console.log(parseFloat(num.toFixed(precision)));
}

roundingFunction(3.1415926535897932384626433832795, 2);
roundingFunction(10.5, 3);