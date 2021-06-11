function chessBoard(num) {
    let count = 0;
    let array = [];

    for(let i = 0; i < num; i++) {
        count += 1;
        if(count % 2 !== 0) {
            array.push(`<div>\n<span class="black"></span>\n<span class="white"></span>\n<span class="black"></span>\n</div>`);
        } else if(count % 2 === 0) {
            array.push(`<div>\n<span class="white"></span>\n<span class="black"></span>\n<span class="white"></span>\n</div>`)
        }
    }

    console.log(`<div class="chessboard">`);
    console.log(array.join('\n'));
    console.log(`</div>`);
}

// chessBoard(3);
chessBoard(5);