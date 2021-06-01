function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpense = 0;
    let swordExpense = 0;
    let shieldExpense = 0;
    let armorExpense = 0;

    let count = 0;
    let shieldBreaks = 0;
    for(let i = 1; i <= lostFights; i++) {
        count += 1;

        if(count % 2 === 0) {
            helmetExpense += helmetPrice;
        }

        if(count % 3 === 0) {
            swordExpense += swordPrice;
        }

        if(count % 6 === 0) {
            shieldExpense += shieldPrice;
            shieldBreaks += 1;
        }

        if(count % 12 == 0) {
            armorExpense += armorPrice;
        }
    }

    let expenses = helmetExpense + swordExpense + shieldExpense + armorExpense;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);