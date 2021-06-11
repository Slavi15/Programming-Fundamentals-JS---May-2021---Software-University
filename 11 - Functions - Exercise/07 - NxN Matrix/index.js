function nxnMatrix(num) {
    let result = '';
    let array = [];
    for(let i = 0; i < num; i++) {
        result = '';
        for(let j = 0; j < num; j++) {
            result += `${num} `;
        }
        array.push(result);
    }
    console.log(array.join('\n'));
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);