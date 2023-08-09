var option; // union type | 
option = "no";
var option2; // também serve para definir tipos variados de uma variável
option2 = 2;
option2 = true;
var planet;
var homePlanet;
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos no planeta Terra!");
    }
}
function greet(callbackfn) {
    var name = "Michelly";
    callbackfn(name);
}
