function mirrorWords(arr) {
    let str = arr[0];
    const regex = /(?:\@(?<word1>[A-Za-z]{3,})\@{2}(?<word2>[A-Za-z]{3,})\@|\#(?<word3>[A-Za-z]{3,})\#{2}(?<word4>[A-Za-z]{3,})\#)/g;
    let match = [...str.matchAll(regex)];
    let array = [];

    if(match.length > 0) {
        console.log(`${match.length} word pairs found!`);
    } else {
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    }
    
    for(let item of match) {
        let { word1, word2, word3, word4 } = item.groups;
        if(word1 === undefined) {
            let reversed = word4.split('').reverse().join('');
            if(word3 === reversed) {
                array.push(`${word3} <=> ${word4}`);
            }
        } else {
            let reversed = word2.split('').reverse().join('');
            if(word1 === reversed) {
                array.push(`${word1} <=> ${word2}`);
            }
        }
    }

    if(array.length > 0) {
        console.log('The mirror words are:');
        console.log(array.join(', '));
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);