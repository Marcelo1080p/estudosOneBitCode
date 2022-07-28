class Spaceship {
    constructor(name, maxCrew, maxRecomendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecomendedVelocity =maxRecomendedVelocity
        this.currentVelocity = 0
    }
    speedUP(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecomendedVelocity) {
            console.log("VELOCIDADE MAXIMA ULTRAPASSADA\NDIMINUA OU PODERAR PROVOCAR DANOS A NAVE")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUP() {
        console.log("Naves de transporte so aumento a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 22, 100)
transportSpaceship.speedUP()

console.log(transportSpaceship)