function loginFunction(arr) {
    const username = arr[0];
    arr.shift();

    for(let i = 0; i < arr.length; i++) {
        if(username == arr[i].split('').reverse().join('')) {
            console.log(`User ${username} logged in.`);
        } else if(i == 3 && username !== arr[i].split('').reverse().join('')) {
            console.log(`User ${username} blocked!`);
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
}

loginFunction(['Acer', 'login', 'go', 'let me in', 'recA']);
loginFunction(['momo', 'omom']);
loginFunction(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);