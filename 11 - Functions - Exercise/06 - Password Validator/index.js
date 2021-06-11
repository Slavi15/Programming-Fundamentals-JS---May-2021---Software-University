function passwordValidator(str) {
    let digitCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] >= 0 && str[i] <= 9) {
            digitCount += 1;
        }
    }

    if((str.length >= 6 && str.length <= 10) && (str.match("^[A-Za-z0-9]+$") && (digitCount >= 2))) {
        console.log('Password is valid');
        return;
    }

    if(str.length < 6 || str.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    if(!str.match("^[A-Za-z0-9]+$")) {
        console.log('Password must consist only of letters and digits');
    }

    if(digitCount < 2) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');