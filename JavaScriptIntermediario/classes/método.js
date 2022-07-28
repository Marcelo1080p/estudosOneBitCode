class Spaceship {
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    speeUp(acceleration){
        this.velocity += acceleration
    }
}


let artemis = new Spaceship('Artemis')

artemis.speeUp(10)
artemis.speeUp(15)

console.log(artemis)