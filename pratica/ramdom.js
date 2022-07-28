function xpto() {
    let n = 0
    return {next: function(){
        if(n<10) {
            n+=2
            return {value:n/2, done:false}
        } else {
            return {value:-1, done:true}
        }
    }}
}

console.log(xpto())