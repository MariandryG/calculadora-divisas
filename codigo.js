
const resultado3 = document.querySelector('#resultado'); 
const buttons = document.querySelector('#envio'); 


/*
//Datos del input//   
const datosBcv = document.querySelectorById('bcv'); 
const datosParalelo = document.querySelectorById('paralelo'); 
const datosMonto = document.querySelectorById('monto');
const seleccionDolar = document.querySelectorById('dolar');
const seleccionBolivar = document.querySelectorById('bolivar');


const formula = document.querySelector('#calculadora');
const cambioMonedas = new Intl.NumberFormat ('es-VE', {style : 'currency', currency: 'VES'});
formula.addEventListener('radio', (e) => {
e.preventDefault();

if (seleccionDolar=) 
    {e.target.monto.value / e.target.bcv.value
    const contenido =  element.innerHTML
    element.innerHTML = HTMLDivElement ('resultados')
        }          

        else if  (seleccionDolar) 
            {e.target.monto.value / e.target.paralelo.value
            const contenido =  element.innerHTML
            element.innerHTML = HTMLDivElement ('resultados')
                }          
    
            else if  (seleccionBolivar) 
                {e.target.monto.value * e.target.paralelo.value
                const contenido =  element.innerHTML
                element.innerHTML = HTMLDivElement ('resultados')
                    }   

                    else if (seleccionBolivar) 
                        {e.target.monto.value * e.target.bcv.value
                        const contenido =  element.innerHTML
                        element.innerHTML = HTMLDivElement ('resultados')
                            }
                                else {
                                    alert ('Lo siento tines resultados coherentes')
                                }    
                            });

*/
//Eventos//

//Fuinciones para llamar los inputs//

    const fomr = document.querySelector('#calculadora');
    const cambioMoneda = new Intl.NumberFormat ('es-VE', {style : 'currency', currency: 'VES'});
    fomr.addEventListener('submit', (e) => {
    e.preventDefault();
    document.write ('el resultado es' + e.target.bcv.value * e.target.monto.value  );
    document.write ('el resultado es' + e.target.paralelo.value * e.target.monto.value);
    document.write ('el resultado es' +  e.target.monto.value / e.target.paralelo.value);
    document.write ('el resultado es' + e.target.monto.value / e.target.bcv.value);

});

const envio = document.querySelector('#calculadora');
    envio.addEventListener('radio', (e) => {
    e.preventDefault();

});
//Tabla de reseteo
function reset () {
    
const bcv = calculadora[ 'bcv'].value;
const monto = calculadora[ 'monto'].value;
const paralelo = calculadora[ 'paralelo'].value;
};
