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
        const resultadoParalrlo = (e.target.paralelo.value * e.target.monto.value).toFixed(2);
        const resultadoDivisionParalelo = (resultadoBcv / e.target.paralelo.value).toFixed(2);
        const resultadoDivisionBcv = (resultadoParalrlo   / e.target.bcv.value).toFixed(2);
        
        const diferenciaBolivar = (resultadoParalrlo -  resultadoBcv).toFixed(2);
        const diferenciaUsd = (diferenciaBolivar / e.target.paralelo.value).toFixed(2);  

            texto.innerHTML +=('<br> El resultado en Bolivares a BCV es: ' + resultadoBcv);
            texto.innerHTML +=('<br> El resultado en Bolivares a Paralelo es: ' + resultadoParalrlo);
            texto.innerHTML +=('<br> El resultado en Divisisa a Paralelo es: ' + resultadoDivisionParalelo);
            texto.innerHTML +=('<br> Diferencias en Divisa: ' + diferenciaUsd)
            texto.innerHTML +=('<br> Diferencias en Bolivares: ' + diferenciaBolivar)
}
    
    });

    

    //Tabla de reseteo
function reset () {
            
    const bcv = calculadora[ 'bcv'].value;
    const monto = calculadora[ 'monto'].value;
    const paralelo = calculadora[ 'paralelo'].value;
        };