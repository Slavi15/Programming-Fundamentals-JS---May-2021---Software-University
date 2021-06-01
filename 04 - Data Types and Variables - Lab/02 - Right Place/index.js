function rightPlace(firstString, char, matchString) {
    let replaced = firstString.replace('_', char);
    
    if(replaced.match(matchString)) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'l', 'Strong');
rightPlace('Str_ng', 'i', 'String');