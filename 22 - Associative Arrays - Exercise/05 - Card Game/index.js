function cardGame(arr) {
    let symbolPoints = {
        'J': 11, 'Q': 12, 'K': 13, 'A': 14,
        'S': 4, 'H': 3, 'D': 2, 'C': 1 
    };
    let players = {};
    let results = {};

    for(let command of arr) {
        let [name, values] = command.split(': ');
        let cards = values.split(', ');

        if(!Object.keys(players).includes(name)) {
            players[name] = [];
        }
        players[name] = players[name].concat(cards);
    }

    for(let [name, cards] of Object.entries(players)) {
        results[name] = 0;

        for(let i = 0; i < cards.length; i++) {
            let card = cards[i];
            if(cards.indexOf(card) === i) {
                let cardAsArray = card.split('');
                let type = cardAsArray.pop();
                let power = cardAsArray.join('');
                let points = 0;
    
                if(Object.keys(symbolPoints).includes(power)) {
                    points = symbolPoints[power] * symbolPoints[type];
                } else {
                    points = Number(power) * symbolPoints[type];
                }
    
                results[name] += points;
            }
        }
    }

    for(let [key, value] of Object.entries(results)) {
        console.log(`${key}: ${value}`);
    }
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);