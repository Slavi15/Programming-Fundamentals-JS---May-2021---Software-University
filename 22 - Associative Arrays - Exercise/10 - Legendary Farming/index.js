function legendaryFarming(str) {
    const materials = new Map();
    const junk = new Map();

    const arr = str.split(' ');
    let legendaryItems = [];

    materials.set('Fragments', { count: 0 });
    materials.set('Shards', { count: 0 });
    materials.set('Motes', { count: 0 });
    
    for (let i = 0; i < arr.length; i++) {
        let material = `${arr[i + 1][0].toUpperCase()}${arr[i + 1].substring(1).toLowerCase()}`;

        if (material === 'Shards' || material === 'Motes' || material === 'Fragments') {
            materials.get(material).count += Number(arr[i]);

            if (!legendaryItems.length && materials.get(material).count >= 250) {
                materials.get(material).count -= 250;
                if (material === 'Shards') {
                    console.log('Shadowmourne obtained!');
                    legendaryItems.push('Shadowmourne');
                } else if (material === 'Fragments') {
                    console.log('Valanyr obtained!');
                    legendaryItems.push('Valanyr');
                } else if (material === 'Motes') {
                    console.log('Dragonwrath obtained!');
                    legendaryItems.push('Dragonwrath');
                };
                break;
            };
        } else {
            if (!junk.has(material)) {
                junk.set(material, {
                    count: Number(arr[i])
                });
            } else {
                junk.get(material).count += Number(arr[i]);
            };
        };

        i += 1;
    };

    const sortedMaterials = new Map([...materials.entries()].sort((a, b) => b[1].count - a[1].count
                                                                        || a[0].localeCompare(b[0])));
    const sortedJunk = new Map([...junk.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    

    for (let kvp of sortedMaterials) {
        console.log(`${kvp[0].toLowerCase()}: ${kvp[1].count}`);
    };

    for (let kvp of sortedJunk) {
        console.log(`${kvp[0].toLowerCase()}: ${kvp[1].count}`);
    };
};

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');