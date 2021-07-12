function softUniReception(arr) {
    let e1 = Number(arr[0]);
    let e2 = Number(arr[1]);
    let e3 = Number(arr[2]);
    let students = Number(arr[3]);

    let hours = 0;
    let allEmployees = e1 + e2 + e3;

    while(students > 0) {
        hours += 1;
        if(hours % 4 !== 0) {
            students -= allEmployees;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);