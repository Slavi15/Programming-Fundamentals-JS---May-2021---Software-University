function modernTimesHashtag(str) {
    let arr = str.split(' ');

    const regex = /^[a-zA-Z]+$/;
    for(let word of arr) {
        if(word.startsWith('#') && word.length > 1 && regex.test(word.substring(1, word.length))) {
            console.log(word.substring(1, word.length));
        }
    }
}

modernTimesHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');