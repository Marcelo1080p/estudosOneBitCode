let testingArrow = {
    name: "Escola de JavaScript",
    normalFuction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

testingArrow.arrowFunction()