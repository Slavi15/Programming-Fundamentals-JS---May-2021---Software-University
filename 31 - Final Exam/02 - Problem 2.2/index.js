function problemTwo(arr) {
    let num = Number(arr.shift());
    const testRegex = /(?<=\w?)(?:\*(?<tag1>[A-Z][a-z]{2,})\*\: \[(?<group1>[A-Za-z])\]\|\[(?<group2>[A-Za-z])\]\|\[(?<group3>[A-Za-z])\]\||\@(?<tag2>[A-Z][a-z]{2,})\@\: \[(?<group4>[A-Za-z])\]\|\[(?<group5>[A-Za-z])\]\|\[(?<group6>[A-Za-z])\]\|)(?!\[|\w)/;
    const regex = /(?<=\w?)(?:\*(?<tag1>[A-Z][a-z]{2,})\*\: \[(?<group1>[A-Za-z])\]\|\[(?<group2>[A-Za-z])\]\|\[(?<group3>[A-Za-z])\]\||\@(?<tag2>[A-Z][a-z]{2,})\@\: \[(?<group4>[A-Za-z])\]\|\[(?<group5>[A-Za-z])\]\|\[(?<group6>[A-Za-z])\]\|)(?!\[|\w)/g;

    for(let line of arr) {
        if(testRegex.test(line) === true) {
            let match = [...line.matchAll(regex)];
            for(let item of match) {
                let groups = item.groups;
                if(groups.tag1 !== undefined) {
                    console.log(`${groups.tag1}: ${groups.group1.charCodeAt(0)} ${groups.group2.charCodeAt(0)} ${groups.group3.charCodeAt(0)}`);
                } else {
                    console.log(`${groups.tag2}: ${groups.group4.charCodeAt(0)} ${groups.group5.charCodeAt(0)} ${groups.group6.charCodeAt(0)}`);
                }
            }
        } else {
            console.log('Valid message not found!');
        }
    }
}

problemTwo(["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"]);
problemTwo(["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid",
"*tAGged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]);