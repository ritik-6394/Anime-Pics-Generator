const btnEl = document.getElementById("btn");
const animeContainerEl = document.getElementById("anime-container");
const animIimgEl = document.getElementById("anime-img");
const animeNameEl = document.getElementById("anime-name");


btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading";
        animeNameEl.innerText = "Updating";
        const response = await fetch("https://api.catboys.com/img");
        const data = response.json();
        console.log(data.url);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style. display = "block";
        animIimgEl.src = data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error)
        btnEl.disabled = true;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happend, please try again";
    }
});