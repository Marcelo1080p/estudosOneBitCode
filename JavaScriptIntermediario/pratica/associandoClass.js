class Person {
    constructor(name, age, typeJob) {
        this.name = name
        this.age = age
        this.typeJob = typeJob

    }
}

class Empresa {
    constructor(name, age, personName, personTypeJob){
        this.name = name
        this.age = age
        this.person = new Person(personName, personTypeJob)
    }
}


let empresa = new Person("Lucas", 18, "DJ")
console.log(empresa)