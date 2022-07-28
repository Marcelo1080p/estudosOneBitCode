let valor = prompt("Qual valor irá converter? R$")

let opc = prompt("Escolha o Par da Moeda Desejada\n[ 1 ] Dollar\n[ 2 ] Euro\n[ 3 ] BitCoin")

let conversao = 0

switch(opc) {
    case '1':
        conversao = valor * 0.20
        alert(`Com ${valor}R$ Convertido terá ${conversao}$ Dollars`)
        break
    case '2':
        conversao = valor * 0.18
        alert(`Com ${valor}R$ Convertido terá ${conversao}EUR`)
        break
    case '3':
        conversao = valor * 0.0000048
        alert(`Com ${valor}R$ Convertido terá ${conversao}BTC`)
    default:
        break    
}