function gramoPhone(first, second, third) {
    let durationSong = ((second.length * first.length) * third.length) / 2;
    let rotationCount = Math.ceil(durationSong / 2.5);
    console.log(`The plate was rotated ${rotationCount} times.`);
}

gramoPhone('Black Sabbath', 'Paranoid', 'War Pigs');