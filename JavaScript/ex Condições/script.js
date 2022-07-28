let piloto = prompt("Qual o seu nome piloto?")

let velocidade = 0

let novaVelocidade = prompt(`A que velocidade você gostaria de acelerar ${piloto}?`)

let comfimarVelocidade = confirm(`${piloto} você confirma acelar a ${novaVelocidade} km/h?`)

if (comfimarVelocidade == true) {
    alert(`${piloto} você está  a ${novaVelocidade} km/h`)
} else if ( velocidade <= 0) {
    alert(`${piloto} Verificamos que você está parado, Aumente sua velocidade, E levante Vôo.`)
} else if ( velocidade <= 50) {
    alert('Você esta devagar, velocidade insuficiente para levantar Vôo')
} else {
    if (velocidade <= 80){
        alert('Parece uma otima velocidade para manter.')
    } else {
        if (velocidade < 100){
            alert('Velocidade alta, considere diminuir!')
        } else {
            alert('Velocidade perigosa. Controle automáico forçado!')
        }
    }
}