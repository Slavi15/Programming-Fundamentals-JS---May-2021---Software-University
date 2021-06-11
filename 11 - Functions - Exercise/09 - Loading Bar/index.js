function loadingBar(num) {
    let array = [];
    let count = 0;
    for(let i = 1; i <= num; i++) {
        if(i % 10 === 0) {
            count += 1;
            array.push('%');
        }
    }

    if(num < 100) {
        console.log(`${num}% [${array.join('')}${'.'.repeat(10 - count)}]`);
        console.log('Still loading...');
    } else if(num === 100) {
        console.log('100% Complete!');
        console.log(`[${array.join('')}]`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);