var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomnummers = [];

while(randomnummers.length < 9) {
    random = Math.floor(Math.random() * 9 + 1);
    if (randomnummers.lastIndexOf(random) == -1) {
        randomnummers.push(random);
        console.log(randomnummers);
    }
}

    random = 0;
for(var plaatje in plaatjes) {
    plaatjes[plaatje].src = "img/pokemon" + randomnummers[random] + ".jpg"
    random++;
}


