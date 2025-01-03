class MovieManager {
    searchMovie(query) {
        const lowerCaseQuery = query.toLowerCase();
        return this.movie.filter(movie => movie.movieName.toLowerCase().includes(lowerCaseQuery))
    }
}

class Movie {
    constructor(movieName, releaseDate, criticalReview, rating) {
        this.movieName = movieName;
        this.releaseDate = releaseDate;
        this.criticalReview = criticalReview;
        this.rating = rating;
    }

    get MovieDetails() {
        return `Movie Name: ${this.movieName}\nRelease Date: ${this.releaseDate}\nReview: ${this.criticalReview}\nRating: ${this.rating}`;
    }
}

export { Movie, MovieManager };