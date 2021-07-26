function meetingsFunction(arr) {
    let successMeetings = {};

    for(let line of arr) {
        let values = line.split(' ');
        let day = values[0];
        let name = values[1];
        
        if(successMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            successMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let key in successMeetings) {
        console.log(`${key} -> ${successMeetings[key]}`);
    }
}

meetingsFunction(['Monday Peter',
                    'Wednesday Bill',
                    'Monday Tim',
                    'Friday Tim']);