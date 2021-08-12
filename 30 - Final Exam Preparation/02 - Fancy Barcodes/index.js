function fancyBarcodes(arr) {
    let num = Number(arr.shift());
    const regex = /@\#{1,}(?<name>[A-Z](?:[A-Za-z0-9]{4,})[A-Z])@\#{1,}/;
    const regex2 = /[0-9]/g;

    for(let line of arr) {
        if(regex.test(line) === true) {
            let found = line.match(regex2);
            if(found === null) {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${found.join('')}`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);