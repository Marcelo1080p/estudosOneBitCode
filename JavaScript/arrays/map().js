const persons = [
    {firstName: "Marcelo", lastName: "Junior"},
    {firstName: "Lucas", lastName: "Cunha"},
    {firstName: "Luzia", lastName: "Aparecida"}
]



function getFullName(item) {
    return [item.firstName, item.lastName].join(" ")
}
console.log(persons.map(getFullName))