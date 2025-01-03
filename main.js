import { Movie, MovieManager } from './components.js';

const newElementFromAPI = document.getElementById('apiElement');
const searchInputName = document.getElementById('searchMovieByName');
const searchInputYear = document.getElementById('searchMovieByYear');
const searchButton = document.getElementById('searchBtn');

const movieApiUrl = 'http://www.omdbapi.com/';
const apiKey = 'f40b039d'

searchButton.addEventListener('click', () => {
    const movieName = searchInputName.value.trim();
    const movieYear = searchInputYear.value.trim();

    newElementFromAPI.innerHTML = '';

    if(!movieName && !movieYear) {
        const warningMsg = document.createElement('div');
        warningMsg.className = 'warning';
        warningMsg.innerHTML = `
        <h6>Please input any value in the search bar</h6>
        `;
        return newElementFromAPI.appendChild(warningMsg);
    }

    searchMovie(movieName);
});

async function searchMovie(movieName) {
    try{
        const searchURL = `${movieApiUrl}?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;
        console.log(`Fetching: ${searchURL}`); 
        const response = await fetch(searchURL);

        if(!response.ok){
            throw new Error(`HTTP Status: ${response.status}`)
        }
    
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(error);
    }  
};