let option: "yes" | "no" | "Maybe"  // union type | 

option = "no"  

let option2: number | boolean  // também serve para definir tipos variados de uma variável

option2 = 2
option2 = true
//option2 = "oi"

// ---------------------------------------------------------------------------------------//

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno"

let planet: Planet
let homePlanet: Planet

function checkPlanet(planet: Planet){
    if(planet === "Terra"){
        console.log("Estamos no planeta Terra!")
    }
}

type GreetingCallBack = (name: string) => void

function greet(callbackfn:GreetingCallBack) {
    let name = "Michelly"
    callbackfn(name)
}