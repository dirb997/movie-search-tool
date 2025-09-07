import { Movie } from './components.js';

const newElementFromAPI = document.getElementById('apiElement');
const searchInputName = document.getElementById('searchMovieByName');
const searchInputYear = document.getElementById('searchMovieByYear');
const searchButton = document.getElementById('searchBtn');

const movieApiUrl = 'http://www.omdbapi.com/';
const apiKey = 'f40b039d'

async function searchNewMovie(movieName) {
    // If input is empty, return
    if(!movieName) return;

    // Fetch API
    await fetch(`${movieApiUrl}?apikey=${apiKey}&t=${movieName}`)
        .then(response => response.json())
        .then(data => {
            const movie = new Movie(data.Title, data.Released, data.Ratings[0].Value, data.imdbRating);
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerHTML = `
            <h2>${movie.movieName}</h2>
            <ul>
                <li>Release Date: ${movie.releaseDate}</li>
                <li>Critical Review: ${movie.criticalReview}</li>
                <li>Rating: ${movie.rating}</li>
            </ul>
            `;
            newElementFromAPI.appendChild(movieElement);
        })
    // Error handling
        .catch(error => {
            const warningMsg = document.createElement('div');
            warningMsg.className = 'warning';
            warningMsg.innerHTML = `
            <h4>Movie not found</h4>
            <h6>${error}</h6>
            `;
            newElementFromAPI.appendChild(warningMsg);

            setTimeout(() => {
                warningMsg.remove();
            }, 3000);
        });
}

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const movieName = searchInputName.value.trim();
    const movieYear = searchInputYear.value.trim();

    newElementFromAPI.innerHTML = '';

    if(!movieName && !movieYear) {
        const warningMsg = document.createElement('div');
        warningMsg.className = 'warning';
        warningMsg.innerHTML = `
        <h4>Please input any value in the search bar</h4>
        `;
        newElementFromAPI.appendChild(warningMsg);

        setTimeout(() => {
            warningMsg.remove();
        }, 3000);
    }

    searchNewMovie(movieName);
});