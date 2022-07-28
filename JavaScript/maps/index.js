const produto = new Map([])

let opcao = alert("Bem vindo")
let opc = ''

while(opc < 3) {
    let quest = prompt('Informe a opção desejada\n[ 1 ] Cadastar Produto\n[ 2 ] Ver Produtos cadastrados\n[ 3 ] Excluir Produtos\n[ 4 ] Sair')
    if (quest.length == 0){
        alert("Você não informou o número para a opção desejada")
    }
    if (quest == 1) {
        let nomeProduto = prompt('Nome do produto')
        let valorProduto = prompt('Valor do produto')
        produto.set(nomeProduto, valorProduto)
    } else if(quest == 2) {
        produto.forEach(function(key, value){
            confirm(`Produto ${value}, valor: ${key}R$\n`)
        })
        if(produto.has() == 0) {
            window.Wr
            alert(`Existe um total de ${produto.size} Cadastrados`)
        }
        
    } else if(quest == 3) {
        let deletar = prompt('Informe o nome do produto que deseja deletar')
        produto.delete(deletar)
    }
    else if(quest == 4){
        break
    }
}