class Pessoa{
    constructor(nome, sobreNome, idade, corOlho){
        this.nome = nome
        this.sobreNome = sobreNome
        this.idade = idade
        this.corOlho = corOlho
    }
}



let marcelo = new Pessoa('Marcelo', "Cordeiro", 21, "Preto")

marcelo.forEach((key, value) => {
    console(key)    
});

console.log(marcelo)