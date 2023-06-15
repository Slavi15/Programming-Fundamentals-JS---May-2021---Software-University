function santaSecretHelper(array) {
    const key = Number(array.shift());
    const regex = /^(?:[^\@]+)?\@(?<name>[A-Za-z]+)(?:[^\@\!\-\:\>]+)?\!(?<behaviour>\G|\N)\!(?:[^\!]+)?$/;

    array.forEach(line => {
        if (line !== 'end') {
            let lineArray = line.split('');

            for (let i = 0; i < line.length; i++) {
                const code = line[i].charCodeAt(0) - key;

                lineArray.splice(i, 1, String.fromCharCode(code));
            };

            const sequence = lineArray.join('');

            const match = regex.exec(sequence);

            if (match !== null) {
                const { name, behaviour } = match.groups;

                if (behaviour === 'G') console.log(name);
            };
        };
    });
};

santaSecretHelper(["3",
                    "CNdwhamigyenumje$J$",
                    "CEreelh-nmguuejnW$J$",
                    "CVwdq&gnmjkvng$Q$",
                    "end"]);
santaSecretHelper(["3",
                    "N}eideidmk$'(mnyenmCNlpamnin$J$",
                    "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
                    "ppqmkkkmnolmnnCEhq/vkievk$Q$",
                    "yyegiivoguCYdohqwlqh/kguimhk$J$",
                    "end"]);
santaSecretHelper(["4",
                    "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
                    "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
                    ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
                    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
                    "DReh}e=<4lhzj1%K%",
                    "end"]);