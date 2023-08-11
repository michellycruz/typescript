const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi adicionado com sucesso`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
}
function addSatellites(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const inputSituation = prompt(`Por favor, informe a situação do planeta\n 1 - Habitado\n 2 - Habitável\n 3 - Inabitável\n 4 - Inexplorado`);
        switch (inputSituation) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação inválida");
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callbackfn) {
    const planetName = prompt(`Informe o nome do planeta`);
    const planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert(`Planeta não encontrado`);
    }
}
function firstMenuOption() {
    const name = prompt('Informe o nome do planeta');
    const coordinateA = Number(prompt('Informe a primeira coordenada'));
    const coordinateB = Number(prompt('Informe a segunda coordenada'));
    const coordinateC = Number(prompt('Informe a terceira coordenada'));
    const coordinateD = Number(prompt('Informe a quarta coordenada'));
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?\nCoordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})\nSituação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite a ser adicionado:");
        addSatellites(satellite, planet);
    });
}
