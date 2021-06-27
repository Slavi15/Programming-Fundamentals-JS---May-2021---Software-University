function catsFunction(arr) {
    let modified = arr.join(' ').split(' ');
    
    for(let i = 0; i < modified.length; i++) {
        console.log(`${modified[i]}, age ${Number(modified[i + 1])} says Meow`);
        i += 1;
    }
}

catsFunction(['Mellow 2', 'Tom 5']);