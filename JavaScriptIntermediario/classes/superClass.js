class Spaceship {
    constructor(name, maxCrew, maxRecommendedValue){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedValue = maxRecommendedValue
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedValue){
            console.log("Velocidade Máxima Ultrapassada\nDiminua a velocidade ou poderá provocar danos á nave.")
        }
    }
}

class TransportSpaceship extends Spaceship{
    constructor(name, maxCrew, maxRecommendedValue, maxLoadWeight){
        super(name, maxCrew, maxRecommendedValue)
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration) {
        acceleration /= 2
        console.log(`Incrementando velocidade em ${acceleration} km/s`)
        super.speedUP(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Tansportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)