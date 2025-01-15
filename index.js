document.addEventListener("DOMContentLoaded", (event) => {
    const giphyApiKey = "HTubqLLJXD4Uvs7Q13f1zEGRZRuiG12R";
    const currentImages = document.getElementById("current-images");
    const removeImages = document.getElementById("remove-images");
    const addGiphyImageForm = document.getElementById("add-giphy-image");
    const searchGiphyText = document.getElementById("search-giphy-text");

    async function addGiphyImage(searchTerm) {
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=1`);

        if (response.status === 200) {
            gifImageURL = response.data.data[0].images.downsized.url;
            const newImg = document.createElement("img");
            newImg.src = gifImageURL;
            currentImages.appendChild(newImg);
        }
    }

    addGiphyImageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addGiphyImage(searchGiphyText.value);
    });

    removeImages.addEventListener("click", (event) => {
        while (currentImages.children.length > 0) {
            currentImages.children[0].remove();
        }
    });
});

