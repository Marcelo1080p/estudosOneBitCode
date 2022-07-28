function MaiorMenor(x,y) {
    if(x > y){
        return `O mair número foi ${x}`
    } else if(x === y) {
        return `Os Valores ${x} e ${y} são iguais`
    } else {
        return `O maior número foi ${y}`
    }
}

console.log(MaiorMenor(5, 10))