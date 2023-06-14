function treasureFinder(arr) {
    const keys = arr.shift().split(' ').map(Number);

    arr.forEach(line => {
        if (line !== 'find') {
            let typeArray = line.split('');
            let id = 0;

            for (let i = 0; i < typeArray.length; i++) {
                const ascii = typeArray[i].charCodeAt(0) - keys[id];
        
                typeArray.splice(i, 1, String.fromCharCode(ascii));
        
                id += 1;
                if (id >= keys.length) id = 0;
            };

            let indices = [];
            let coordinatesStart = 0;
            let coordinatesEnd = 0;
            
            for (let i = 0; i < typeArray.length; i++) {
                if (typeArray[i] === '&') indices.push(i);
                if (typeArray[i] === '<') coordinatesStart = i;
                if (typeArray[i] === '>') coordinatesEnd = i;
            };

            const treasureType = typeArray.slice(indices[0] + 1, indices[1]).join('');
            const coordinates = typeArray.slice(coordinatesStart + 1, coordinatesEnd).join('');
            
            console.log(`Found ${treasureType} at ${coordinates}`);
        };
    });
};

treasureFinder(["1 2 1 3",
                    "ikegfp'jpne)bv=41P83X@", 
                    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", 
                    "find"]);
treasureFinder(["1 4 2 5 3 2 1",
                "Ulgwh\"jt$ozfj!'kqqg(!bx\"A3U237GC",
                "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
                "'stj)>34W68Z@",
                "find"]);