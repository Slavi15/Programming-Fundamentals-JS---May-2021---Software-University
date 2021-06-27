function sortByTwoCriteria(arr) {
    arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(arr.join(`\n`));
}

sortByTwoCriteria(['alpha', 'beta', 'gamma']);
sortByTwoCriteria(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']);
sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']);