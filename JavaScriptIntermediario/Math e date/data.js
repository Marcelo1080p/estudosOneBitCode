const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezenbro"];

const days = ["Domingo ", "Segunda-Feira", "Terça-Feira", "Quarta-Feira","Quinta-Feira", "Sexta-Feira", "Sábado"];

const di = new Date();
const ano = di.getFullYear()
let day = days[di.getDay()];

const d = new Date();
let month = months[d.getMonth()];

console.log(`Mês: ${month}, dia: ${day}, Ano: ${ano}`)