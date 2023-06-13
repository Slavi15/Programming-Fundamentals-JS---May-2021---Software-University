function commentsFunction(arr) {
    const map = new Map();
    let users = [];

    arr.forEach(line => {
        if (line.includes('user')) {
            const user = line.slice(5);

            users.push(user);
        } else if (line.includes('article')) {
            const article = line.slice(8);

            map.set(article, []);
            map.get(article).totalComments = 0;
        } else {
            const regex = new RegExp('(?<user>[A-Za-z0-9\s]+) posts on (?<article>[A-Za-z0-9\s]+)\: (?<commentTitle>[A-Za-z0-9 ]+)(?:\, (?<commentText>[A-Za-z ]+))?', 'g');

            const match = regex.exec(line);
            const { user, article, commentTitle, commentText } = match.groups;

            if (users.includes(user) && map.has(article)) {
                map.get(article).push({
                    user: user,
                    commentTitle: commentTitle,
                    commentText: commentText
                });

                map.get(article).totalComments += 1;
            };
        };
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1].totalComments - a[1].totalComments));
    for (let kvp of sortedMap) {
        kvp[1].sort((a, b) => a['user'].localeCompare(b['user']));
    };
    

    for (let kvp of sortedMap) {
        console.log(`Comments on ${kvp[0]}`);
        let output = [];
        for (let comment of kvp[1]) {
            output.push(`--- From user ${comment['user']}: ${comment['commentTitle']} - ${comment['commentText']}`);
        };
        console.log(output.join('\n'));
    };
};

commentsFunction(['user aUser123', 
                    'someUser posts on someArticle: NoTitle, stupidComment', 
                    'article Books', 
                    'article Movies', 
                    'article Shopping', 
                    'user someUser', 
                    'user uSeR4', 
                    'user lastUser', 
                    'uSeR4 posts on Books: I like books, I do really like them', 
                    'uSeR4 posts on Movies: I also like movies, I really do', 
                    'someUser posts on Shopping: title, I go shopping every day', 
                    'someUser posts on Movies: Like, I also like movies very much']);
commentsFunction(['user Mark',
                    'Mark posts on someArticle: NoTitle, stupidComment',
                    'article Bobby',
                    'article Steven',
                    'user Liam',
                    'user Henry',
                    'Mark posts on Bobby: Is, I do really like them',
                    'Mark posts on Steven: title, Run',
                    'someUser posts on Movies: Like']);