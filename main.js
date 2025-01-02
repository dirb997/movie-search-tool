import { Movie, MovieManager } from "./components";

const movieApiUrl = 'http://www.omdbapi.com/';
// ?i=tt3896198&apikey=f40b039d';
const newElementFromAPI = document.getElementById('apiElement');

const searchInput = document.getElementById('search-movie');
const query = searchInput.value.trim();
const searchURL = `${movieApiUrl}?i=tt3896198&s=${encodeURIComponent(query)}&apikey=f40b039d'`;

fetch(searchURL).then(response => {
    if(!response.ok) {
        throw new Error('The API call failed');
    }

    return response.json();
})
.then(data => {
    newElementFromAPI.textContent = JSON.stringify(data.Search, null, 2);
})
.catch(error => {
    console.log(error);
});