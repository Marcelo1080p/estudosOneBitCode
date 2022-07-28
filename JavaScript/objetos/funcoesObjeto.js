let spaceship = {
    name: "demeter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        console.log("Preparando Propulsão")
        console.log("Ligando computador de bordo")
        console.log(this.name)
    }
}

spaceship.velocity = 0
spaceship.speedUp = function(acceleration){
    this.velocity += acceleration
}

console.log(spaceship)

spaceship.speedUp(10)
console.log(spaceship)