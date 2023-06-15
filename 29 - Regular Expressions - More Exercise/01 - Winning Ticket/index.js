function winningTicket(string) {
    const array = string.split(/[\, ]+/);
    const regex = /(\@{6,10}|\#{6,10}|\${6,10}|\^{6,10})/g;

    array.forEach(ticket => {
        if (ticket.length >= 20) {
            const middle = Math.ceil(ticket.length / 2);

            let left = ticket.substring(0, middle).match(regex);
            let right = ticket.substring(middle).match(regex);

            if (left === null || right === null) {
                console.log(`ticket "${ticket}" - no match`);
            };
            
            if (left !== null && right !== null) {
                left = left.join('');
                right = right.join('');
                
                if (left[0] === right[0]) {
                    if (left.length === 10 && right.length === 10) {
                        console.log(`ticket "${ticket}" - ${left.length}${left[0]} Jackpot!`);
                    } else if (left.length < right.length) {
                        console.log(`ticket "${ticket}" - ${left.length}${left[0]}`);
                    } else if (right.length < left.length) {
                        console.log(`ticket "${ticket}" - ${right.length}${right[0]}`);
                    } else if (left.length === right.length) {
                        console.log(`ticket "${ticket}" - ${left.length}${left[0]}`);
                    };
                } else {
                    console.log('invalid ticket');
                };
            };
        } else {
            console.log('invalid ticket');
        };
    });
};

winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb ,  th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');
winningTicket('th@@@@@@@emo@@@@@@ey');