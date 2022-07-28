const fruits = new Map([
    ["apples", 500, ],
    ["bananas", 300, ],
    ["oranges", 200, ]
])




fruits.forEach(function(key, value){
    console.log(`Fruta ${key}, valor: ${value}`)
})

let text = ''

for(const x of fruits.entries()){
    text += x
}