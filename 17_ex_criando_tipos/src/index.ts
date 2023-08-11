type PlanetSituation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"

type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: PlanetSituation,
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation){
    planets.push(
     {
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`O planeta ${name} foi adicionado com sucesso`)
}

function findPlanet(name: string){
    const planet = planets.find(planet => planet.name === name)
    return planet
}

function updateSituation(situation: PlanetSituation, planet: Planet){
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)
}

function addSatellites(name:string, planet:Planet){
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

function removeSatellite(name:string, planet: Planet){
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`)
}

function promptValidSituation(){
    let situation: PlanetSituation
    let validSituation = false

    while(!validSituation){
        const inputSituation = prompt(`Por favor, informe a situação do planeta\n 1 - Habitado\n 2 - Habitável\n 3 - Inabitável\n 4 - Inexplorado`)

        switch (inputSituation) {
            case "1":
                situation = "Habitado"
                validSituation = true
                break;
            case "2":
                situation = "Habitável"
                validSituation = true
                break;
            case "3":
                situation = "Inabitável"
                validSituation = true
                break;
            case "4":
                situation = "Inexplorado"
                validSituation = true
                break;  
            default:
                break;
        }
    }
}