function slowdown(velocity, printer) {
    let deceleration = 20

    while(velocity > 0){
        printer(velocity)

        velocity -= deceleration
    }
    alert(`Nave parada, Comportas podem ser abertas.`)
}

let spaceshipVelocity = 2050

slowdown(spaceshipVelocity, function(velocity){
    console.log(`Velocidade atual: ${velocity}`)
})