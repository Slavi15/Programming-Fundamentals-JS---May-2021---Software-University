function employeesFunction(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`Name: ${arr[i]} -- Personal Number: ${arr[i].length}`);
    }
}

employeesFunction(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);