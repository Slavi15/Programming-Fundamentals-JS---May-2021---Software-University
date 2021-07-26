function schoolGrades(arr) {
    let map = new Map();

    for(let line of arr) {
        let [name, ...values] = line.split(' ');
        let grades = values.map(Number);

        if(map.has(name)) {
            for(let i of grades) {
                map.get(name).push(i);
            }
        } else {
            map.set(name, grades);
        }
    }

    let sorted = Array.from(map).sort((a, b) => {
        let aSum = 0;
        let bSum = 0;

        for(let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }

        for(let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;

        return aAverage - bAverage;
    });

    for(let i of sorted) {
        console.log(`${i[0]}: ${i[1].join(', ')}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
                'Tim 5 6',
                'Tammy 2 4 3',
                'Tim 6 6']);