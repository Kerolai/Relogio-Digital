const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Adiciona '0' antes de números menores que 10
    if(h < 10) h = '0' + h;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    horas.textContent = h; 
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000); // Executa a função a cada segundo
