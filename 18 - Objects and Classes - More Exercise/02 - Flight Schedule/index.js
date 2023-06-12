function flightSchedule(arrays) {
    const map = new Map();

    const flights = arrays[0].map(flight => flight.split(' '));
    const statuses = arrays[1].map(status => status.split(' '));
    const statusToPrint = arrays[2].join('');

    let usedStatus = [];

    flights.forEach(([code, ...destination]) => {
        map.set(code, {
            Destination: destination.join(' '),
            Status: ''
        });
    });

    statuses.forEach(([code, status]) => {
        if (map.has(code)) {
            map.get(code)['Status'] = status;
            usedStatus.push(status);
        };
    });

    const statusSet = new Set(usedStatus);

    for (let kvp of map) {
        if (map.get(kvp[0])['Status'] === statusToPrint) {
            console.log(map.get(kvp[0]));
        } else if (!statusSet.has(statusToPrint) && map.get(kvp[0])['Status'] === '') {
            console.log({ Destination: map.get(kvp[0])['Destination'], Status: statusToPrint});
        };
    };
};

flightSchedule([['WN269 Delaware',
                    'FL2269 Oregon',
                    'WN498 Las Vegas',
                    'WN3145 Ohio',
                    'WN612 Alabama',
                    'WN4010 New York',
                    'WN1173 California',
                    'DL2120 Texas',
                    'KL5744 Illinois',
                    'WN678 Pennsylvania'
                ],
                [   
                    'DL2120 Cancelled',
                    'WN612 Cancelled',
                    'WN1173 Cancelled',
                    'SK430 Cancelled'
                ],
                ['Cancelled']]);
flightSchedule([["WN269 Delaware",
                    "FL2269 Oregon",
                    "WN498 Las vegas",
                    "WN3145 Ohio",
                    "WN612 Alabama",
                    "WN4010 New York",
                    "WN1173 California",
                    "DL2120 Texas",
                    "KL5744 Illinois",
                    "WN678 Pennsylvania"
                ],
                [
                    "DL2120 Cancelled",
                    "WN612 Cancelled",
                    "WN1173 Cancelled",
                    "SK330 Cancelled"
                ],
                ["Ready to fly"]]);