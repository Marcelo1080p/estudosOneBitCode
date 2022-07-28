const aluno = {
    nome: "João",
    idade: 12,
    notas: [2, 10, 10, 10]
}

Object.freeze(aluno)
aluno.nome = "Marcelo"
aluno.nome = "Leonardo"
aluno.idade = 18
console.log(aluno.nome, aluno.idade)