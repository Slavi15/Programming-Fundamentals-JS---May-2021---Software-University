function cutAndReverse(str) {
    let middle = Math.floor(str.length / 2);
    let before = str.lastIndexOf('', middle);
    let after = str.indexOf('', middle + 1);

    if (before == -1 || (after != -1 && middle - before >= after - middle)) {
        middle = after;
    } else {
        middle = before;
    };

    let s1 = str.substr(0, middle);
    let s2 = str.substr(middle);

    console.log(s1.split('').reverse().join(''));
    console.log(s2.split('').reverse().join(''));
};

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');