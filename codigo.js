
const resultado3 = document.querySelector('#resultado'); 
const buttons = document.querySelector('#envio'); 



/*
//Datos del input//   
const formula = document.querySelector('#calculadora');
formula.addEventListener('submit', (e) => {
e.preventDefault();

if (seleccionDolar) 
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
    const cambioMoneda = new Intl.NumberFormat (value = 'es-VE', {style : 'currency', currency: 'VES', maximumFractionDigits: 2 });
    fomr.addEventListener('submit', (e) => {
    e.preventDefault();

    
    
        const bolivar = document.querySelector ('#bolivar');
        const dolar = document.querySelector ('#dolar');

        let texto = document.querySelector('p')
        const resultado =   0;

        const i = 

                texto.innerHTML = ('el resultado es ' + e.target.bcv.value * e.target.monto.value );
                texto.innerHTML = ('el resultado es ' + e.target.paralelo.value * e.target.monto.value);
                texto.innerHTML = ('el resultado es ' +  e.target.monto.value / e.target.paralelo.value);
                texto.innerHTML = ('el resultado es ' + e.target.monto.value / e.target.bcv.value);

                

            
    });

//Tabla de reseteo
function reset () {
    
const bcv = calculadora[ 'bcv'].value;
const monto = calculadora[ 'monto'].value;
const paralelo = calculadora[ 'paralelo'].value;
};



/*
const datos = { 
    bcv: e.target.bcv.value,
    monto: e.target.monto.value,
    paralelo: e.target.paralelo.value,
};

const bcv = datos ['bcv' ];
const monto = datos [ 'monto'];
const paralelo = datos [ 'paralelo'];

if (datos)  {'El primer dato es:' [ 'bcv'] * [ 'monto'];
         'El segundo dato es:' [ 'paralelo'] * [ 'monto'] ;
        'El tercer dato es:' [ 'bcv'] / [ 'monto'] ;
        'El cuarto dato es:' [ 'paralelo'] / [ 'monto'];}

        document.write ('datos')
});
*/