class Movie {
    constructor(movieName, releaseDate, criticalReview, rating) {
        this.movieName = movieName;
        this.releaseDate = releaseDate;
        this.criticalReview = criticalReview;
        this.rating = rating;
    }

    get MovieDetails() {
        return `
        Movie Name: ${this.movieName}\n
        Release Date: ${this.releaseDate}\n
        Review: ${this.criticalReview}\n
        Rating: ${this.rating}`;
    }
}

export { Movie, MovieManager };