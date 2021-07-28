function revealWords(words, str) {
    let wordsArray = words.split(', ');
    let strArray = str.split(' ');
    
    for(let line of strArray) {
        if(line.includes('*')) {
            for(let i of wordsArray) {
                if(i.length === line.length) {
                    let index = strArray.indexOf(line);
                    strArray.splice(index, 1, i);
                }
            }
        }
    }

    console.log(strArray.join(' '))
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');