import { Movie, MovieManager } from './components.js';

const movieApiUrl = 'http://www.omdbapi.com/';
const apiKey = 'f40b039d'

const newElementFromAPI = document.getElementById('apiElement');

const searchInputName = document.getElementById('searchMovieByName');
const searchInputYear = document.getElementById('searchMovieByYear');
const searchButton = document.getElementById('searchBtn');

searchButton.addEventListener('click', async() => {
    const movieName = searchInputName.value.trim();
    const movieYear = searchInputYear.value.trim();

    if(!movieName && !movieYear) {
        const warningMsg = document.createElement('div');
        warningMsg.className = 'warning';
        warningMsg.innerHTML = `
        <h6>Please input any value in the search bar</h6>
        `;
        newElementFromAPI.appendChild(warningMsg);
        return;
    }


    // try {

    // } catch(error) {
    //     console.log(error);
    // }
});

const query = searchInputName.value.trim();
const searchURL = `${movieApiUrl}?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

// There is a small problem: when searching though the API, we need and IMBD id, not a movie name.
// We should create a 

fetch(searchURL)
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP Status: ${response.status}`)
    }

    return response.text();
})
.then(data => {
    console.log(data);
})
.catch(console.error('The API failed'));