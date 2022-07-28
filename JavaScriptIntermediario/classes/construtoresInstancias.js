class Spaceship {
    constructor(myName, type='Descoberta'){
        this.name = myName
        this.type = type
    }
}


let darwin = new Spaceship("Darwin")

let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin)
console.log(helmet)
