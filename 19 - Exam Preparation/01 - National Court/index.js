function nationalCourt(arr) {
    let e1 = Number(arr[0]);
    let e2 = Number(arr[1]);
    let e3 = Number(arr[2]);
    let people = Number(arr[3]);

    let allEmployees = e1 + e2 + e3;
    let hour = 0;

    while(people > 0) {
        hour += 1;

        if(hour % 4 !== 0) {
            people -= allEmployees;
        }
    }

    console.log(`Time needed: ${hour}h.`);
}

nationalCourt(['5', '6', '4', '20']);
nationalCourt(['1', '2', '3', '45']);
nationalCourt(['3', '2', '5', '40']);