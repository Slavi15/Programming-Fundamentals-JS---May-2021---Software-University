function matchPhoneNumber(string) {
    const regex = /(\+359 2 [0-9]{3} [0-9]{4}\b)|(\+359-2-[0-9]{3}-[0-9]{4}\b)/g;
    let phones = [];

    let valid;
    while (valid = regex.exec(string)) {
        phones.push(valid[0]);
    };

    console.log(phones.join(', '));
};

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");