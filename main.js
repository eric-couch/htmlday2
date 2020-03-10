document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btn");
    let txt = document.getElementById("txt");
    let apiKey = '86c39163';
    btn.addEventListener("click", function() {
        fetch("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + txt.value)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            let movieInfo = document.getElementById("movieInfo");
            let title = myJson.Title;
            movieInfo.innerHTML = title;
            movieInfo.innerHTML += '<br>';
            movieInfo.innerHTML += myJson.Plot;
            movieInfo.innerHTML += '<br>';
            myJson.Actors.split(",").forEach(function(actor) {
                movieInfo.innerHTML += actor + " | "
            })
            movieInfo.innerHTML += '<br>';

            myJson.Ratings.forEach(function(rating) {
                movieInfo.innerHTML += rating.Source + " : " + rating.Value + "<br>"
            })
            let link = document.createElement("a");
            link.href = "https://www.imdb.com/title/" + myJson.imdbID;
            let img = document.createElement("img");
            img.src = myJson.Poster;
            img.style.width = "25vw";
            link.appendChild(img);
            movieInfo.appendChild(link);
        });

    })
})