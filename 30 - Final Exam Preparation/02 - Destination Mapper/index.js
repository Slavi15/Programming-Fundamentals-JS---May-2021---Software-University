function destinationMapper(str) {
    const regex = /(?:\=(?<word1>[A-Z][A-Za-z]{2,})\=|\/(?<word2>[A-Z][A-Za-z]{2,})\/)/g;
    let match = [...str.matchAll(regex)];
    let array = [];
    let points = 0;

    for(let item of match) {
        let { word1, word2 } = item.groups;
        if(word1 !== undefined) {
            points += word1.length;
            array.push(word1);
        } else {
            points += word2.length;
            array.push(word2);
        }
    }

    console.log(`Destinations: ${array.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');