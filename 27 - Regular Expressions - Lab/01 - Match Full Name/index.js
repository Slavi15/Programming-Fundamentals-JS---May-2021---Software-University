function matchFullName(string) {
    const regex = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;
    let nameArray = [];

    let valid;
    while (valid = regex.exec(string)) {
        nameArray.push(valid[0]);
    };

    console.log(nameArray.join(' '));
};

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");