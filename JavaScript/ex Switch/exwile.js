let warCount = 0
let chosenship = ''

let spaceship = prompt("Digite o nome da nave")

chosenoption = prompt("Deseja entrar em dobra espacial?\n[ 1 ] - Sim\n[ 2 ]- Não")

while(chosenoption == '1') {
    warCount += 1
    chosenoption = prompt("Deseja realizar a próxima dobra\n[ 1 ] - Sim\n[ 2 ] - Não")
}

alert(`Nave ${spaceship}\nQuantidade de dobras ${warCount}`)