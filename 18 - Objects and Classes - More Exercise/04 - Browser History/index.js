function browserHistory(object, array) {
    const map = new Map();

    const browser = object['Browser Name'];

    map.set(browser, {
        openTabs: object['Open Tabs'],
        recentlyClosed: object['Recently Closed'],
        logs: object['Browser Logs']
    });

    for (let command of array) {
        const [commandKey, ...commandValue] = command.split(' ');

        if (commandKey === 'Open') {
            if (!map.get(browser)['openTabs'].includes(commandValue.join(''))) {
                map.get(browser)['openTabs'].push(commandValue.join());
                map.get(browser)['logs'].push(command);
            };
        };

        if (commandKey === 'Close') {
            if (map.get(browser)['openTabs'].includes(commandValue.join(''))) {
                const openTabIndex = map.get(browser)['openTabs'].indexOf(commandValue.join(''));
                map.get(browser)['openTabs'].splice(openTabIndex, 1);
                map.get(browser)['recentlyClosed'].push(commandValue.join(''));
                map.get(browser)['logs'].push(command);
            };
        };

        if (commandKey === 'Clear') {
            map.set(browser, {
                openTabs: [],
                recentlyClosed: [],
                logs: []
            });
        };
    };

    let output = [];
    for (let kvp of map) {
        output.push(`${kvp[0]}\nOpen Tabs: ${kvp[1]['openTabs'].join(', ')}\nRecently Closed: ${kvp[1]['recentlyClosed'].join(', ')}\nBrowser Logs: ${kvp[1]['logs'].join(', ')}\n`);
    };

    console.log(output.join('\n'));
};

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": [
        "Facebook",
        "YouTube",
        "Google Translate"
    ],
    "Recently Closed": [
        "Yahoo",
        "Gmail"
    ],
    "Browser Logs": [
        "Open YouTube",
        "Open Yahoo",
        "Open Google Translate",
        "Close Yahoo",
        "Open Gmail",
        "Close Gmail",
        "Open Facebook"
    ]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": [
        "YouTube"
    ],
    "Recently Closed": [
        "Gmail",
        "Dropbox"
    ],
    "Browser Logs": [
        "Open Gmail",
        "Close Gmail",
        "Open Dropbox",
        "Open YouTube",
        "Close Dropbox"
    ]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);