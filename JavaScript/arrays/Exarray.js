const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
  ];


let crewGreaaterThan9 =  hitchedSpaceships.filter(spaceship =>{
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let engoingHigPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})
     

let highSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = `Espaçonaves com mais de 9 tripulantes ${crewGreaaterThan9.join(", ")}`

message += `\nPlataform com processo de engate: ${engoingHigPlatform + 1}`

message += `\nEspaçonaves destacadas ${highSpaceships.join(", ")}`

alert(message)