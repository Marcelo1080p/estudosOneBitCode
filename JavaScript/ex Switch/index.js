let distancia = prompt("Digite a distância em anos luz")

let opcao = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronômica(AU)\n3. Quilômetros(KM)\n(Digite o número da opção desejada")

let Unidade
let converterDistancia

switch (opcao) {
    case '1':
        Unidade = 'Parsec'
        converterDistancia = distancia * 0.306601
        
        break
    case '2':
        Unidade = 'Unidade Astronômica'
        converterDistancia = distancia * 63241.1
        break
    case '3':
        Unidade = 'Quilômetros'
        converterDistancia = distancia * 9.5 * Math.pow(10, 12)
        break
    default:
        Unidade = 'Unidade Não Identificada'   
        converterDistancia = 'Conversão fora do escopo200'   
}
alert(`Distância em Anos-Luz ${distancia}\n ${Unidade} : ${converterDistancia}`)