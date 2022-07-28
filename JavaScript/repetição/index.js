let spaceshipName = prompt("Qual é o nome da nave?")

let inverseName = ''

for (let i = spaceshipName.length -1; i >= 0; i--) {
    if (spaceshipName[i] == 'e'){
        break
    }
    inverseName += spaceshipName[i]

}
alert(`Nome original ${spaceshipName}\nNome após ocultação ${inverseName}`)