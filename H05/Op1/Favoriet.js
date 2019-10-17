pics = document.getElementById("pics");
createPicturesHolders();
createPokemonImages();

function createPicturesHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createPokemonImages() {
        pictureHolder = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolder.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i+1);
         pokemonplaatje = document.createElement("img");
         pokemonplaatje.src = "img/pokemon" + (i+1) + ".jpg";
         pokemonplaatje.id = (i+1);
         pokemonplaatje.addEventListener("click", function() {
             maakFavoriet(this.id);
         });
         pictureHolder[i].appendChild(favoriet);
         pictureHolder[i].appendChild(pokemonplaatje);
    }
}

function maakFavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('img/hart.png')"
}