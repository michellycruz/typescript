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
                alert("Situação inválida")
                break;
        }
    }
    return situation
}

function promptValidPlanet(callbackfn:(planet: Planet) => void){
    const planetName = prompt(`Informe o nome do planeta`)
    const planet = findPlanet(planetName)

    if(planet){
        callbackfn(planet)
    } else {
        alert(`Planeta não encontrado`)
    }
}

function firstMenuOption(){
    const name = prompt('Informe o nome do planeta')
    const coordinateA = Number(prompt('Informe a primeira coordenada'))
    const coordinateB = Number(prompt('Informe a segunda coordenada'))
    const coordinateC = Number(prompt('Informe a terceira coordenada'))
    const coordinateD = Number(prompt('Informe a quarta coordenada'))

    const situation = promptValidSituation()

    const confirmation = confirm(`Confirma o registro do planeta ${name}?\nCoordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})\nSituação: ${situation}`)

    if(confirmation){
        addPlanet(name, [coordinateA,coordinateB,coordinateC,coordinateD], situation)
    }
}

function secondMenuOption(){
    promptValidPlanet(planet => {
        const situation = promptValidSituation()
        updateSituation(situation, planet)
    })
}

function thirdMenuOption(){
    promptValidPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite a ser adicionado:")
        addSatellites(satellite,planet)
    })
}

function fourthMenuOption(){
    promptValidPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite a ser removido:")
        removeSatellite(satellite, planet)
    })
}

function fifthMenuOption(){
    let list = 'Planetas:\n'

    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates

        list += `
            Nome: ${planet.name}
            Coordenadas: (${a}, ${b}, ${c}, ${d})
            Situação: ${planet.situation}
            Satélites: ${planet.satellites.length}
        `
        planet.satellites.forEach(satellite => {
            list += `   - ${satellite}\n`
        })
    })

    alert(list)
}

let userOption = 0

while (userOption !== 6){

    const menu = `Menu
        1 - Registrar um novo planeta
        2 - Atualizar situação do planeta
        3 - Adicionar um satélite ao planeta
        4 - Remover um satélite do planeta
        5 - Listar todos os planetas
        6 - sair
        `
    
    
    userOption = Number.parseInt(prompt(menu))

    switch (userOption){
        case 1:
            firstMenuOption()
            break;
        case 2:
            secondMenuOption()
            break;
        case 3:
            thirdMenuOption()
            break;
        case 4:
            fourthMenuOption()
            break;
        case 5:
            fifthMenuOption()
            break;
        case 6:
            alert('Encerrando o programa')
            break;
        default:
            alert('Opção inválida, retornando ao menu')
            break;
    }
}