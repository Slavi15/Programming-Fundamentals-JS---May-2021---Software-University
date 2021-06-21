function listOfProducts(arr) {
    let sorted = arr.sort();
    
    let count = 0;
    for(let i = 0; i < sorted.length; i++) {
        count += 1;
        console.log(`${count}.${sorted[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);