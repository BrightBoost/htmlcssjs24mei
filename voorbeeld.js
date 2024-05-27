function veranderNaam() {
    let pageTitle = document.getElementById("title").innerHTML;
    if(pageTitle == "Main heading") {
        document.getElementById("title").innerHTML = "Abrakadabra";
    } else {
        document.getElementById("title").innerHTML = "Main heading";
    }
}

let x = 2;
let y = 2;

if(x == y) {
    console.log("x en y zijn gelijk");
} else {
    console.log("niet gelijk");
}

// maak een js bestand
// link je html aan het js bestand
// voeg toe alert("blabla")
// open de pagina opnieuw