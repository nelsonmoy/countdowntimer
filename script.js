var meses = document.getElementById('meses');
var dias = document.getElementById('dias');
var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

setInterval(TimerHandler, 1000);

var fechaObjetivo = new Date(2022,11,31,23,59,59);
var fechaActual = 0;

function TimerHandler() {
    fechaActual = new Date();    
    var intervalo = new Date(fechaObjetivo - fechaActual);
    meses.innerHTML = intervalo.getMonth() + 1;
    dias.innerHTML = intervalo.getDate();
    horas.innerHTML = intervalo.getHours();
    minutos.innerHTML = intervalo.getMinutes();
    segundos.innerHTML = intervalo.getSeconds();
}
