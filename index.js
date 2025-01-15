// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "HTubqLLJXD4Uvs7Q13f1zEGRZRuiG12R";

async function searchGiphyImage(searchTerm) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=1`);
    console.log(response);
}

searchGiphyImage("Pikachu");