// variabelen
let groet = "Hoi Candy, Goeiemorgen!"; // dit is een tekst waarde, ook wel string genoemd
let nummer = 11; // dit is een numerieke waarde
let nummer2 = 12;

let outputTekst = groet + ", " + nummer;
let totaal = nummer + nummer2;

console.log(totaal); // string concatenation

// operators
// math operators
// plus min keer gedeeld door
let nr1 = 2;
let nr2 = 2;

let uitkomst = nr1 + nr2;
console.log(uitkomst);
console.log(nr1 - nr2);
console.log(nr1 * nr2);
console.log(nr1 / nr2);

// vergelijkings operators
console.log(nr1 > nr2); // is nr1 groter dan nr2
console.log(nr1 < nr2); // is nr1 kleiner dan nr2
console.log(nr1 <= nr2); // is nr1 kleiner dan of gelijk aan nr2
console.log(nr1 >= nr2); // is nr1 groter dan of gelijk aan nr2
console.log(nr1 == nr2); // gelijk aan
console.log(nr1 != nr2); // niet gelijk aan

// if statements >> conditie die true of false moet zijn
// als nr1 niet gelijk is aan nr2, dan doe "zus of zo" = wat in het code block dat volgt staat
if(nr1 != nr2) { // als de conditie true is, voer dan het code blok uit
    console.log("De nummers zijn niet gelijk"); // dit is het code block
} else {
    console.log("De nummers zijn wel gelijk");
}

let age = 18;

if(age >= 18) {
    console.log("je mag stemmen donderdag");
} else {
    console.log("helaas, je mag niet stemmen");
}



// loops

// functies