class Spaceship {
    static get deceleration(){
        return 0.15
    }

    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speeUp(acceleration){
        this.currentVelocity += (acceleration * (1 - Spaceship.deceleration))
    }
}

let spaceship = new Spaceship("Apollo")

spaceship.speeUp(100)


console.log(spaceship)
if (Spaceship.deceleration < 0.15) {
    Spaceship.deceleration += Spaceship.deceleration
    
}