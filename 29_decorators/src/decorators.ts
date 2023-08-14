function Decorator(){
    return function (target, key, descriptor){
        descriptor.value = function (value: number) {
            console.log(`Calculando ${value} elevado ao quadrado`)
            return value ** 2
        }
    }
}


class Planet {

    name: string
    constructor (name:string) {
        this.name = name
    }

    @Decorator()
    calculate(value:number){
        //...
        console.log(`Calculando ${value} vezes 2`)
        return value * 2
    }
}

const planet = new Planet('terra')
const result = planet.calculate(5)

console.log(`Resultado: ${result}`)