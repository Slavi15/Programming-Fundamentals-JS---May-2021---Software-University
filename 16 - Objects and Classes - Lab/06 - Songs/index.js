function songsFunction(arr) {
    let numberOfSongs = arr.shift();
    let typeList = arr.pop();
    let modified = arr.join('_').split('_');
    
    for(let i = 0; i < modified.length; i++) {
        if(typeList === 'all') {
            console.log(modified[i + 1]);
            i += 2;
            continue;
        }

        if(modified[i] === typeList) {
            console.log(modified[i + 1]);
            i += 2;
        } else {
            i += 2;
        }
    }
}

songsFunction([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songsFunction([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songsFunction([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);