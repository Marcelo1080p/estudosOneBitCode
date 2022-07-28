class Person {
    constructor(obstaculos) {
        this.obstaculos = obstaculos
        this.pulos = 0
    }

    Jump() {
        if(this.obstaculos < this.pulos) {
            console.log("Pulou")
            this.pulos += 1
            
        } else {
            throw new Error(`você so pode pular ${this.obstaculos}x`)
        }
    }

    maxJumps() {
        console.log(`Você pulou ${this.pulos} contra ${this.obstaculos}x`)
    }
}

let mario = new Person(7)

try {
    mario.Jump()
    mario.Jump()
    mario.Jump()
    mario.Jump()
    mario.Jump()
    mario.Jump()
} catch (e){
    console.log(e.message)
    mario.maxJumps()
}
