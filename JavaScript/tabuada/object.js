/*let valores = [{
    n1: 10,
    n2: 2,
    tabuada: function(){
        for(let cont = 1; cont <= 10; cont++){
            console.log(`3 x ${cont} = ${3*cont}`)
        }
    }
}]


valores.tabuada()*/


function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada='';
  
    for(var count=1; count<=20; count++)
     tabuada += `${num} x ${count} = ${num*count}</br>`;
    
    resposta.innerHTML = tabuada;
}

