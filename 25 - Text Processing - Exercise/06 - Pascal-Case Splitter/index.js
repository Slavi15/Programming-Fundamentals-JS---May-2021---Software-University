function pascalCaseSplitter(str) {
    let result = str.replace(/([A-Z][a-z])/g, ' $1').replace(/(\d)/g, ' $1');
    let split = result.split(' ');
    split.shift();
    console.log(split.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');