function melrahShake(arr) {
    let string = arr.shift();
    let pattern = arr.shift();

    while (pattern.length > 0) {
        const firstIndex = string.indexOf(pattern);
        const lastIndex = string.lastIndexOf(pattern);

        if (firstIndex !== -1 && lastIndex !== -1) {
            console.log('Shaked it.');

            const split = string.split('')
            split.splice(firstIndex, pattern.length);
            split.splice(lastIndex - pattern.length, pattern.length);
        
            string = split.join('');

            const patternSplit = pattern.split('');
            patternSplit.splice(Math.floor(pattern.length / 2), 1);

            pattern = patternSplit.join('');
        } else {
            console.log('No shake.');
            console.log(string);
            break;
        };
    };

    if (pattern.length === 0) {
        console.log('No shake.');
        console.log(string);
    };
};

melrahShake(["astalavista baby", "sta"]);
melrahShake(["##mtm!!mm.mm*mtm.#", "mtm"]);