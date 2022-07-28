class ResourceProcessStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}


let processor = new ResourceProcessStation("Gaia", 2000)

let totalProcessed = ResourceProcessStation.calculateProcessInHours(processor.monthlyProcessing, 10)

console.log(totalProcessed)