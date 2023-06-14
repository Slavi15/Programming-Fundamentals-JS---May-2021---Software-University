function deserializeString(arr) {
    let array = [];

    arr.forEach(line => {
        if (line !== 'end') {
            let split = line.split(/[:/]/);
            split.shift();

            for (let index of split) {
                array.push({
                    char: line[0],
                    index: index
                });
            };
        };
    });

    let output = [];
    const sorted = array.sort((a, b) => Number(a['index']) - Number(b['index']));
    for (let item of sorted) {
        output.push(item['char']);
    };
    console.log(output.join(''));
};

deserializeString(["a:0/2/4/6", 
                    "b:1/3/5", 
                    "end"]);
deserializeString(["a:0/3/5/11", 
                    "v:1/4", 
                    "j:2", 
                    "m:6/9/15", 
                    "s:7/13", 
                    "d:8/14", 
                    "c:10", 
                    "l:12", 
                    "end"]);