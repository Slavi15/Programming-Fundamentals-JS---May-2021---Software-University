function sequencesFunctions(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let array = JSON.parse(arr[i]).sort((a, b) => b - a).join('\\');
        
        if (!map.has(array)) {
            map.set(array, {
                id: i
            });
        } else {
            map.get(array).id = i;
        };
    };

    let output = [];
    const sortedMap = new Map([...map.entries()].sort((a, b) => a[1].id - b[1].id));
    for (let kvp of sortedMap) {
        output.push(kvp[0].split('\\'));
    };

    for (let array of output) {
        console.log(array.map(Number));
    };
};

sequencesFunctions(["[-3, -2, -1, 0, 1, 2, 3, 4]",
                    "[10, 1, -17, 0, 2, 13]",
                    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequencesFunctions(["[7.14, 7.180, 7.339, 80.099]",
                    "[7.339, 80.0990, 7.140000, 7.18]",
                    "[7.339, 7.180, 7.14, 80.099]"]);