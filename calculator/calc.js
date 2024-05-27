function calcSum() {
    // haal de waardes op
    let nr1 = document.getElementById("nr1").value;
    let nr2 = document.getElementById("nr2").value;

    // tel op
    let som = Number(nr1) + Number(nr2);

    // toon totaal
    document.getElementById("sum").innerHTML = som;
}

