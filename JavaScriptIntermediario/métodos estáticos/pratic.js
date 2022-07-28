let listas = [{
    name: "Marcelo",
    lastName: "Cordeiro",
    year: 21
}]

listas.push({name: "Lucas", lastName: "Cunha", year: 18})

listas.forEach(function(test){
    console.log(`Nome: ${test.name}, Sobre nome: ${test.lastName}, Idade: ${test.year}`)
})
