
const resultado3 = document.querySelector('#resultado'); 
const buttons = document.querySelector('#envio'); 
const informacion = document.querySelector('#calculadora');


//Datos del input//   
const datosBcv = document.querySelector('bcv'); 
const datosParalelo = document.querySelector('paralelo'); 
const datosMonto = document.querySelector('monto');



    //formulas//

    //Dividir con Paralelo//
    function dividirTasaBcv(datosBcv,datosMonto) {
        const eleccionDolar = document.getElementById('dolar');
        if (dividirTasaBcv == eleccionDolar ) {const resultado = datosBcv / datosMonto;
        }          
    };

const resultados = dividirTasaBcv(document.getElementById ('bcv'), document.getElementById ('monto'));
document.write('El resultado es' + resultados);

    const envio = document.querySelector('calcular')
    //console.log (calculadora)

//Dividir con Bcv//    
function dividirTasaParalelo(datosParalelo,datosMonto) {
    const eleccionDolar = document.getElementById('dolar');
    if (dividirTasaParalelo == eleccionDolar ) {const resultado = datosParalelo / datosMonto;
    }
};

const resultado = dividirTasaParalelo(document.getElementById ('paralelo'), document.getElementById ('monto'));
document.write('El resultado es' + resultados);




//Multiplicar con Bcv//
function multiplicarTasaBcv(datosBcv,datosMonto) {
    const eleccionBolivar = document.getElementById('bolivar');
    if (multiplicarTasaBcv == eleccionBolivar ) {const resultado = datosBcv * datosMonto;
    
    }    
};

const resultados1 = multiplicarTasaBcv(document.getElementById ('bcv'), document.getElementById ('monto'));
document.write('El resultado es' + resultados);



//Multiplicar con Paralelo//
function multiplicarTasaParalelo(datosParalelo,datosMonto) {
    const eleccionParalelo = document.getElementById('bolivar');
        if (multiplicarTasaParalelo == eleccionParalelo ) {const resultado2 = datosParalelo * datosMonto;
        
        }
};

const resultado2 = multiplicarTasaParalelo(document.getElementById ('bcv'), document.getElementById ('monto'));
document.write('El resultado es' + resultados);


//Eventos//

//Fuinciones para llamar los inputs//
const fomr = document.querySelector('#calculadora');
fomr.addEventListener('submit', (e) => {
e.preventDefault();
document.write( 'el resultado es' + e.target.bcv.value * e.target.monto.value); 
document.write('el resultado es' + e.target.paralelo.value * e.target.monto.value); 
document.write('el resultado es' +  e.target.monto.value / e.target.paralelo.value);
document.write('el resultado es' + e.target.monto.value / e.target.bcv.value,)
    
});

const cambioMoneda = new Intl.NumberFormat ('es-VE', {style : 'currency', currency: 'VES'}) ;

//


//Tabla de reseteo
function reset () {
    
const bcv = calculadora[ 'bcv'].value;
const monto = calculadora[ 'monto'].value;
const paralelo = calculadora[ 'paralelo'].value;
};
