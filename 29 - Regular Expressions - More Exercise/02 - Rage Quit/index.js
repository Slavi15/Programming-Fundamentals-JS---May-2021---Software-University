function rageQuit(string) {
    const regex = /[0-9]+/g;

    let uniqueLetters = [];
    let output = [];

    const letters = string[0].split(regex).filter(n => n);
    const numbers = string[0].match(regex).map(Number);

    const lettersString = letters.join('');
    for (let i = 0; i < lettersString.length; i++) {
        if (!uniqueLetters.includes(lettersString[i].toLowerCase())) uniqueLetters.push(lettersString[i].toLowerCase());
    };

    for (let i = 0; i < letters.length; i++) {
        output.push(`${letters[i].toUpperCase()}`.repeat(numbers[i]));
    };

    console.log(`Unique symbols used: ${uniqueLetters.length}`);
    console.log(output.join(''));
};

rageQuit(['a3']);
rageQuit(['aSd2&5s@1']);
rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15']);