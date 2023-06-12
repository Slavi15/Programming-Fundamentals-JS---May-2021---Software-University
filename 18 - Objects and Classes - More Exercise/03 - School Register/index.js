function schoolRegister(arr) {
    const map = new Map();

    const array = arr.map(item => item.split(', '));
    array.forEach(student => {
        const [nameKey, nameValue] = student[0].split(': ');
        const [gradeKey, gradeValue] = student[1].split(': ');
        const [scoreKey, scoreValue] = student[2].split(': ');

        if (scoreValue >= 3) {
            let nextGrade = Number(gradeValue) + 1;
            if (!map.has(nextGrade)) {
                map.set(nextGrade, {
                    students: [ nameValue ],
                    scores: [ Number(scoreValue) ]
                });
            } else {
                map.get(nextGrade).students.push(nameValue);
                map.get(nextGrade).scores.push(Number(scoreValue))
            };
        };
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
    for (let kvp of sortedMap) {
        const sum = kvp[1].scores.reduce((previousValue, currentValue) => previousValue + currentValue);
        const average = sum / kvp[1].scores.length;
        map.get(kvp[0]).averageScore = average.toFixed(2);
    };

    let output = [];
    for (let kvp of sortedMap) {
        output.push(`${kvp[0]} Grade\nList of students: ${kvp[1].students.join(', ')}\nAverage annual score from last year: ${kvp[1].averageScore}\n`);
    };

    console.log(output.join('\n'));
};

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
                "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
                "Student name: George, Grade: 8, Graduated with an average score: 2.83",
                "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
                "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
                "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
                "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
                "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", 
                "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 
                "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", 
                "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 
                "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
                'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
                'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
                'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
                'Student name: John, Grade: 9, Graduated with an average score: 2.90',
                'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
                'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);