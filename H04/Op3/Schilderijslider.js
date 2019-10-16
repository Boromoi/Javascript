var plaatjes = [1,2,3];
var teller = 0;

// Baarden
var baard = document.getElementById("baard");
baard.style.backgroundImage = "url('img/baard1.png')";

baard.addEventListener("click", function () {
    getBaard();
    baard.style.backgroundImage = "url('img/baard" + getBaard() + ".png')";
});

function getBaard() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}

// Mond
var mond = document.getElementById("mond");
mond.style.backgroundImage = "url('img/mond1.jpg')";

mond.addEventListener("click", function () {
    getMond();
    mond.style.backgroundImage = "url('img/mond" + getMond() + ".jpg')";
});

function getMond() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}

// Oog
var oog = document.getElementById("oog");
oog.style.backgroundImage = "url('img/oog1.jpg')";

oog.addEventListener("click", function () {
    getOog();
    oog.style.backgroundImage = "url('img/oog" + getOog() + ".jpg')";
});

function getOog() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}