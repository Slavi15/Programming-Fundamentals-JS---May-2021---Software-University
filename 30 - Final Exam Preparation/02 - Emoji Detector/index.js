function emojiDetector(arr) {
    const regex = /(\:{2}[A-Z]([a-z]+){2,}\:{2}|\*{2}[A-Z][a-z]{2,}\*{2})/gm;
    const regex2 = /[0-9]/g;
    let map = new Map();
    let str = arr.join();
    let emoji = str.match(regex);
    let digits = str.match(regex2).map(Number);
    
    let threshhold = 1;
    for(let num of digits) {
        threshhold *= num;
    };
    let emojiCount = emoji.length;

    for(let line of emoji) {
        let splitted = line.split(/\W+/).join('');
        let total = 0;
        for(let i = 0; i < splitted.length; i++) {
            total += splitted.charCodeAt(i);
        }
        map.set(line, {
            total: total
        });
        total = 0;
    }

    console.log(`Cool threshold: ${threshhold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for(let kvp of map) {
        if(kvp[1].total > threshhold) {
            console.log(kvp[0]);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);