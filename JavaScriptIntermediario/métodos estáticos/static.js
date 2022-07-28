class Operação {
    constructor(valor1, valor2) {
        this.n1 = valor1
        this.n2 = valor2
    }
    static multiplicação(v1, v2) {
        return v1 * v2
    }
}

let multi1 = 5595
let multi2 = 31515

console.log(Operação.multiplicação(multi1, multi2))