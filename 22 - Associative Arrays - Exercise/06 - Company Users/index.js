function companyUsers(arr) {
    let companies = {};

    for(let line of arr) {
        let [company, id] = line.split(' -> ');

        if(!Object.keys(companies).includes(company)) {
            companies[company] = [];
        };

        if(companies[company].includes(id) === false) {
            companies[company].push(id);
        };
    };

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    
    for(let [company, id] of sorted) {
        console.log(company);
        for(let i of id) {
            console.log(`-- ${i}`);
        };
    };
};

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);