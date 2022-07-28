function save() {
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programing = document.querySelector("select[name='programming-lang']").value
    alert(`Nome: ${name}\nlinguagem de Programação: ${programing}`)
}