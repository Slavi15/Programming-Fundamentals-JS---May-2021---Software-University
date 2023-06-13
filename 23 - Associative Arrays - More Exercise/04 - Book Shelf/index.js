function bookShelf(arr) {
    const map = new Map();
    let indices = [];

    arr.forEach(line => {
        if (line.includes('->')) {
            const [shelfID, shelfGenre] = line.split(' -> ');

            if (!indices.includes(shelfID)) {
                indices.push(shelfID);

                map.set(shelfGenre, []);
                map.get(shelfGenre).id = shelfID;
                map.get(shelfGenre).totalBooks = 0;
            };
        } else {
            const regex = new RegExp('(?<bookTitle>[A-Za-z ]+)\: (?<bookAuthor>[A-Za-z ]+)\, (?<bookGenre>[A-Za-z -]+)', 'g');

            const match = regex.exec(line);
            const { bookTitle, bookAuthor, bookGenre } = match.groups;

            if (map.has(bookGenre)) {
                map.get(bookGenre).push({
                    title: bookTitle,
                    author: bookAuthor
                });

                map.get(bookGenre).totalBooks += 1;
            };
        };
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1].totalBooks - a[1].totalBooks));
    for (let kvp of sortedMap) {
        console.log(`${kvp[1].id} ${kvp[0]}: ${kvp[1].totalBooks}`);
        let output = [];
        for (let book of kvp[1]) {
            output.push(`--> ${book.title}: ${book.author}`);
        };
        console.log(output.join('\n'));
    };
};

bookShelf(['1 -> history', 
            '1 -> action',
            'Death in Time: Criss Bell, mystery', 
            '2 -> mystery', 
            '3 -> sci-fi', 
            'Child of Silver: Bruce Rich, mystery',
            'Hurting Secrets: Dustin Bolt, action', 
            'Future of Dawn: Aiden Rose, sci-fi', 
            'Lions and Rats: Gabe Roads, history', 
            '2 -> romance', 
            'Effect of the Void: Shay B, romance', 
            'Losing Dreams: Gail Starr, sci-fi', 
            'Name of Earth: Jo Bell, sci-fi', 
            'Pilots of Stone: Brook Jay, history']);