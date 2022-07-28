document.body.onload = adcElement

function adcElement() {
    var newDiv = document.createElement("div")
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!"
    )
    var divAtual = document.getElementById("div1")
    document.body.insertBefore(newDiv, divAtual)
}