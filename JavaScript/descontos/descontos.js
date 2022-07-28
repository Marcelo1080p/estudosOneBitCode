function clicar(){
    let valor = document.getElementById("valor_compra")
    let desc = document.getElementById("valor_desconto")
    let res = document.getElementById("res")
    
    let n1 = Number(valor.value)
    let n2 = Number(desc.value)


    let valor_final = n1 - (n1 * n2 / 100)
    
    res.innerHTML = `Valor total de ${n1}R$, com desconto de ${n2}%,Valor final será ${valor_final}R$`
    
} 