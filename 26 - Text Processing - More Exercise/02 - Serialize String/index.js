function serializeString(arr) {
    const map = new Map();

    for (let i = 0; i < arr[0].length; i++) {
        if (!map.has(arr[0][i])) {
            map.set(arr[0][i], [
                i
            ]);
        } else {
            map.get(arr[0][i]).push(i);
        };
    };

    for (let kvp of map) {
        console.log(`${kvp[0]}:${kvp[1].join('/')}`);
    };
};

serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);