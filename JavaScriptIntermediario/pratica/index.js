function click() {
    let inputEntrada = document.getElementById("entrada")
    let btnEnvio = document.getElementById("enviar")
    let resp = document.getElementById("res")

    const object = []
    object.push(inputEntrada)

    let res = object.forEach(function(key){
        resp.innerHTML = key
    })

    

    
}
console.log(click)