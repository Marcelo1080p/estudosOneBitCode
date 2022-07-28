let velocidade = 50

let aceleracao = 5

while(velocidade){
    console.log(`Estamos a ${velocidade}`)
    velocidade += aceleracao
    if (velocidade == 110){
        break
    }
}