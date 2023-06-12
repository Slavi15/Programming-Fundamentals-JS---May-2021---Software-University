class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    };

    addProduct(product) {
        this.storage.push(product);

        this.capacity -= Number(product.quantity);
        this.totalCost += (Number(product.price) * Number(product.quantity));
    };

    getProducts() {
        let string = [];
        this.storage.forEach(item => {
            string.push(item);
        });

        const jsonString = JSON.stringify(string);
        const jsonSubstring = jsonString.substring(1, jsonString.length - 1).split('},{').join('}\n{');
        const escapedJSON = jsonSubstring.replace(/\\n/g, '\\n');
        console.log(JSON.stringify(escapedJSON).replace(/\\"/g, '\"'));
    };
};

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);

// let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
// let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
// let storage = new Storage(30);

// storage.addProduct(productOne);
// storage.addProduct(productTwo);