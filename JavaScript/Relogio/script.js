setInterval(function relogio(){
    let segundos = document.getElementById('segundos')
    let minutos = document.getElementById('minutos')
    let horas = document.getElementById('horas')
    let today = new Date();


    const min = today.getMinutes();
    const seg = today.getSeconds();
    const hor = today.getHours();
    

    if (hor < 10) hor = '0' + hor;{
        horas.textContent = hor;
    }
    if (min < 10) min = '0' + min;{
        minutos.textContent = min;
    }
    if (seg < 10) seg = '0' + seg;{
        segundos.textContent = seg;
    }
})