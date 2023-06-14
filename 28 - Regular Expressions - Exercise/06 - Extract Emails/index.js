function extractEmails(string) {
    const regex = /(?<user>[A-Za-z0-9]+(?:[\.|\_|\-]+)?[A-Za-z0-9]+)\@(?<host>[A-Za-z0-9]+(?:[\.|\-]+)?[A-Za-z0-9]+\.[A-Za-z0-9]+)/;
    const array = string.split(' ');

    array.forEach(item => {
        if (regex.test(item)) {
            let testRegex = /[A-Za-z0-9]/;
            if (!testRegex.test(item[item.length - 1])) {
                console.log(item.substring(0, item.length - 1));
            } else if (!testRegex.test(item[0])) {
                console.log(item.substring(1));
            } else {
                console.log(item);
            };
        };
    });
};

extractEmails("Please contact us at: support@github.com.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");