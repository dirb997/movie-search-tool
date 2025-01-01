const movieApiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=f40b039d';
const newElementFromAPI = document.getElementById('apiElement');

fetch(movieApiUrl).then(response => {
    if(!response.ok) {
        throw new Error('The API call failed');
    }

    return response.json();
})
.then(data => {
    newElementFromAPI.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
    console.log(error);
});