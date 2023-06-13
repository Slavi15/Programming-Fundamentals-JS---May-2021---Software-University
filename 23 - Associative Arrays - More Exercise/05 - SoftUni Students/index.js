function softuniStudents(arr) {
    const map = new Map();

    arr.forEach(line => {
        if (line.includes(':')) {
            const [course, capacity] = line.split(': ');

            if (!map.has(course)) {
                map.set(course, []);
                map.get(course).capacity = Number(capacity);
                map.get(course).totalStudents = 0;
            } else {
                map.get(course).capacity += Number(capacity);
            };
        } else {
            const regex = /(?<username>[A-Za-z0-9]+)\[(?<credits>[0-9]+)\](?: with email )(?<email>[A-Za-z0-9.@#-]+)(?: joins )(?<course>[A-Za-z0-9#-. ]+)/g;

            const match = regex.exec(line);
            const { username, credits, email, course } = match.groups;

            if (map.has(course) && map.get(course).capacity > 0) {
                map.get(course).push({
                    student: username,
                    email: email,
                    credits: Number(credits)
                });

                map.get(course).totalStudents += 1;
                map.get(course).capacity -= 1;
            };
        };
    });

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1].totalStudents - a[1].totalStudents));
    for (let kvp of sortedMap) {
        kvp[1].sort((a, b) => b['credits'] - a['credits']);
    };

    for (let kvp of sortedMap) {
        console.log(`${kvp[0]}: ${kvp[1].capacity} places left`);
        let output = [];
        for (let student of kvp[1]) {
            output.push(`--- ${student.credits}: ${student.student}, ${student.email}`);
        };
        console.log(output.join('\n'));
    };
};

softuniStudents(['JavaBasics: 2', 
                'user1[25] with email user1@user.com joins C#Basics', 
                'C#Advanced: 3', 
                'JSCore: 4', 
                'user2[30] with email user2@user.com joins C#Basics',
                'user13[50] with email user13@user.com joins JSCore',
                'user1[25] with email user1@user.com joins JSCore', 
                'user8[18] with email user8@user.com joins C#Advanced',
                'user6[85] with email user6@user.com joins JSCore', 
                'JSCore: 2',
                'user11[3] with email user11@user.com joins JavaBasics',
                'user45[105] with email user45@user.com joins JSCore',
                'user007[20] with email user007@user.com joins JSCore',
                'user700[29] with email user700@user.com joins JSCore',
                'user900[88] with email user900@user.com joins JSCore']);
softuniStudents(['JavaBasics: 15',
                'user1[26] with email user1@user.com joins JavaBasics',
                'user2[36] with email user11@user.com joins JavaBasics',
                'JavaBasics: 5',
                'C#Advanced: 5',
                'user1[26] with email user1@user.com joins C#Advanced',
                'user2[36] with email user11@user.com joins C#Advanced',
                'user3[6] with email user3@user.com joins C#Advanced',
                'C#Advanced: 1',
                'JSCore: 8',
                'user23[62] with email user23@user.com joins JSCore']);