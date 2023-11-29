// ENDPOINT
const API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search?'
// API Key
const API_KEY = 'UMdM5eoKJZb8EftwDWInYS1AYsWtOQrd';
// limit
const LIMIT = 25; 
// rating
const RATING = 'r';
// search
let SEARCH = 'coffee';

// Get `input` element
const inputField = document.querySelector('input[type="text"]');


inputField.addEventListener("keyup", event => {
  
  
  // the search string    
  console.log(inputField.value);
  
    // Go fetch Giphy API data
    fetch(`
    ${API_ENDPOINT}api_key=${API_KEY}&q=${inputField.value}&limit=${LIMIT}&rating=${RATING}
    `)
    .then( response => response.json() )
    .then( gifs => {

    // Check Check         
    console.log(gifs.data[0].images.downsized);

    // Get container for data
    const container = document.querySelector('.container');         

    // Loop through the array of data
    gifs.data.map( gif => {

    // template 
    const template  = `
    <div class="carousel-item w-full">
      <img class="border-8 border-white" src=" ${gif.images.downsized.url} " />
      <h2 class="text-5xl text-center text-white"> ${gif.title} </h2>
    </div>
    `;

    // append
    container.insertAdjacentHTML("afterbegin", template);

    });


    });



});
