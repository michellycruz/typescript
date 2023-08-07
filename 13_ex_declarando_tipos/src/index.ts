const spaceships = []

function addSpaceship (name: string, pilot: string, crewLimit: number){
    const spaceship ={
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    spaceships.push(spaceship)
    alert(`a nave ${spaceship.name} foi registrada com sucesso`)
}

function findSpaceship(name: string){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find(ship => ship.name === name)
    return spaceship
}

function addCrewMember(member:string, spaceship: {name: string, crewLimit: number, crew: string[]}) {
    if(spaceship.crew.length >= spaceship.crewLimit){
        alert(`${member} não pode ser adicionado, limite atingido`)
    } else{
        spaceship.crew.push(member)
        alert(`${member} foi adicionado à tripulação da nave ${spaceship.name}`)
    }
}

function sendInMission(spaceship: {name: string, crewLimit: number, crew: string[], inMission: boolean}){
    if(spaceship.inMission){
        alert(`${spaceship.name} não pode ser enviada pois já está em uma missão.`)
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)){
        alert(`${spaceship.name} não pode ser enviada, tripulação insuficiente.`)
    } else {
        spaceship.inMission = true

        alert(`A nave ${spaceship.name} foi enviada para a missão com sucesso!!`)
    }
}

function firstMenuOption(){
    const name = prompt(`Qual o nome da nave?`)
    const crewLimit = Number(prompt(`Quantos tripulantes a nave ${name} suporta?`))
    const pilot = prompt(`Qual o nome do piloto da nave ${name}?`)

    const confirmation = confirm(`Confirma o cadastro da nave a baixo?\n Nome:${name}\n Limite de Tripulação: ${crewLimit}\n Nome do piloto: ${pilot}`)

    if(confirmation){
        addSpaceship(name, pilot, crewLimit)
    }
}

function secondMenuOption(){
    const member = prompt(`Qual é o nome do tripulante?`)
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`)

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação de ${spaceshipName}`)

        if(confirmation){
            addCrewMember(member, spaceship)
        }
    }
}

function thirdMenuOption(){
    const spaceshipName = prompt('Qual o nome da nave a ser enviada?')

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma o envio da nave ${spaceshipName} na missão`)

        if(confirmation){
            sendInMission(spaceship)
        }
    }
}