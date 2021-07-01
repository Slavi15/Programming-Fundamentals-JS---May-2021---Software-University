function moviesFunction(arr) {
    let movieList = [];

    for(let command of arr) {
        if(command.includes('addMovie')) {
            let [ addCommand, ...movieName ] = command.split(' ');
            let movieString = movieName.join(' ');
            let obj = { 
                name: movieString 
            };
            movieList.push(obj);
        } else if(command.includes('directedBy')) {
            let tokens = command.split(' ');
            let movieTokens = [];
            let directorName = [];
            let directedIndex = tokens.findIndex(x => x === 'directedBy');

            for(let i = 0; i < directedIndex; i++) {
                movieTokens.push(tokens[i]);
            };
            for(let i = directedIndex + 1; i < tokens.length; i++) {
                directorName.push(tokens[i]);
            };

            let name = movieTokens.join(' ');
            let director = directorName.join(' ');

            let movie = movieList.find(x => x.name === name);
            if(movie) {
                movie.director = director;
            }
        } else {
            let tokens = command.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');

            let movie = movieList.find(x => x.name === name);
            if(movie) {
                movie.date = date;
            }
        }
    }

    for(let movie of movieList) {
        if(movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }
}

moviesFunction(['addMovie Fast and Furious',
                'addMovie Godfather',
                'Inception directedBy Christopher Nolan',
                'Godfather directedBy Francis Ford Coppola',
                'Godfather onDate 29.07.2018',
                'Fast and Furious onDate 30.07.2018',
                'Batman onDate 01.08.2018',
                'Fast and Furious directedBy Rob Cohen']);