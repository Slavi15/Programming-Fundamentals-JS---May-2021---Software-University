function convertToJSON(name, lastName, hair) {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hair
    };

    let string = JSON.stringify(obj);
    console.log(string);
}

convertToJSON('George', 'Jones', 'Brown');