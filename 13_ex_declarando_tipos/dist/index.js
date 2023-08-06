const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`a nave ${spaceship.name} foi registrada com sucesso`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado, limite atingido`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado à tripulação da nave ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada pois já está em uma missão.`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada, tripulação insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`A nave ${spaceship.name} foi enviada para a missão com sucesso!!`);
    }
}
