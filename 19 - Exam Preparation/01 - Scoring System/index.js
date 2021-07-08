function scoringSystem(arr) {
    let studentCount = Number(arr.shift());
    let lectureCount = Number(arr.shift());
    let addBonus = Number(arr.shift());

    let bonus = 0;
    let array = [];
    for(let i = 0; i < arr.length; i++) {
        bonus = (Number(arr[i]) / lectureCount) * (5 + addBonus);
        array.push({
            bonus: bonus,
            attendances: arr[i]
        });
    }

    let sorted = array.sort((a, b) => { 
        return a.bonus - b.bonus; 
    }).reverse();

    console.log(`Max Bonus: ${Math.ceil(sorted[0].bonus)}.`);
    console.log(`The student has attended ${sorted[0].attendances} lectures.`);
}

scoringSystem([
    '5',  '25', '30',
    '12', '19', '24', '16', '20']);
scoringSystem([
    '10', '30', '14', 
    '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);