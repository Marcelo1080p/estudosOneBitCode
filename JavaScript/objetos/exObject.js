let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
        
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxima da nave(Km/s)"))
}

function accelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar?"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert(`Velocidade Maxima Ultrapassada!\nVelocidade ${spaceship.maxVelocity}Km/s\nVelocidade maxima da nave ${spaceship.maxVelocity} Km/s`)
    }
}

function stop() {
    alert(`Nome: ${spaceship.name}\nTipo: ${spaceship.type}\nVelocidade da nave: ${spaceship.velocity}\nVelocidade maxima da nave ${spaceship.maxVelocity}`)
    spaceship.velocity = 0
}


function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption){
            case 1:
                accelerate()
                break
            case 2:
                stop()
                break
            default:    
            alert("opção invalida")    
        }
    } while(chosenOption != '2')
}

registerSpaceship()
showMenu()
