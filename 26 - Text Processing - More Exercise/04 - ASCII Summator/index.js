function asciiSummator(arr) {
    const start = arr[0].charCodeAt(0);
    const end = arr[1].charCodeAt(0);

    let sum = 0;
    for (let char of arr[2]) {
        if (char.charCodeAt(0) > start && char.charCodeAt(0) < end
                || char.charCodeAt(0) > end && char.charCodeAt(0) < start) {
            sum += char.charCodeAt(0)
        };
    };

    console.log(sum);
};

asciiSummator([".", "@", "dsg12gr5653feee5"]);
asciiSummator(["?", "E", "@ABCEF"]);
asciiSummator(["a", "1", "jfe392$#@j24ui9ne#@$"]);