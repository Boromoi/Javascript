var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/pokemon1.jpg')";

slideholder.addEventListener("click", function () {
    getPokemon();
    slideholder.style.backgroundImage = "url('img/pokemon" + getPokemon() + ".jpg')";
});

function getPokemon() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}