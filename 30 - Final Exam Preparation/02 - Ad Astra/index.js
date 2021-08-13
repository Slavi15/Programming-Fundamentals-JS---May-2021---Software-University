function adAstra(arr) {
    let str = arr[0];
    const regex = /(?:\|(?<item1>[A-Za-z\s]+)\|(?<date1>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\|(?<cal1>[0-9]{1,5})\||\#(?<item2>[A-Za-z\s]+)\#(?<date2>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\#(?<cal2>[0-9]{1,5})\#)/g;
    let match = [...str.matchAll(regex)];
    let map = new Map();
    
    let totalCalories = 0;
    if(match.length > 0) {
        for(let item of match) {
            let { item1, date1, cal1, item2, date2, cal2 } = item.groups;
            if(item1 !== undefined) {
                map.set(item1, {
                    date: date1,
                    calories: cal1
                });
                totalCalories += Number(cal1);
            } else {
                map.set(item2, {
                    date: date2,
                    calories: cal2
                });
                totalCalories += Number(cal2);
            }
        }
    }

    let daysAmount = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysAmount} days!`);
    if(map.size > 0) {
        for(let kvp of map) {
            console.log(`Item: ${kvp[0]}, Best before: ${kvp[1].date}, Nutrition: ${kvp[1].calories}`);
        };
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);
adAstra([
    'Hello|#Invalid food#19/03/20#450|$5*(@'
]);