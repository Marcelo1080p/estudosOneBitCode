let spaceship = prompt("Digite o nome da nave")

let chartoReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship =''

for(let pos = 0; pos < spaceship.length; pos++){
    if (spaceship[pos] == chartoReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert(`O novo nome da nave é ${newSpaceship}`)