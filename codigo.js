//Constantes generales//
    const resultado3 = document.querySelector('#resultado'); 
    const buttons = document.querySelector('#envio'); 


//Fuinciones para llamar los inputs//

const fomr = document.querySelector('#calculadora');
    fomr.addEventListener('submit', (e) => {
    const cambioMoneda = new Intl.NumberFormat (value = 'es-VE', {style : 'currency', currency: 'VES',});
    const bcv = document.querySelector ('#bcv');
    const monto = document.querySelector ('#monto');
    const paralelo = document.querySelector ('#paralelo');   
e.preventDefault();

const texto = document.querySelector('p')
    texto.innerHTML = ''; //Limpia el contenido
    

if (e.target.monto.value == 0)
    {texto.innerHTML +=('<br> Monto igual 0 ')}

else {
    const resultadoBcv = (e.target.bcv.value * e.target.monto.value).toFixed(2) ;
    const ResultadoParalrlo = (e.target.paralelo.value * e.target.monto.value).toFixed(2);
    const resultadoDivisionParalelo = (e.target.monto.value / e.target.paralelo.value).toFixed(2);
    const resultadoDivisionBcv = (e.target.monto.value  / e.target.bcv.value).toFixed(2);
            
    texto.innerHTML +=('<br> el resultado es: ' + resultadoBcv);
    texto.innerHTML +=('<br> el resultado es: ' + ResultadoParalrlo);
    texto.innerHTML +=('<br> el resultado es: ' + resultadoDivisionParalelo);
    texto.innerHTML +=('<br> el resultado es: ' + resultadoDivisionBcv);
}
    
    });

    //Tabla de reseteo
function reset () {
            
    const bcv = calculadora[ 'bcv'].value;
    const monto = calculadora[ 'monto'].value;
    const paralelo = calculadora[ 'paralelo'].value;
        };