//Constantes generales//
const resultadoTexto = document.querySelector('p');
const form = document.querySelector('#calculadora');
const bcvInput = document.querySelector('input[ name = "bcv"]');
const paraleloInput = document.querySelector('input[ name = "paralelo"]');
const montoInput = document.querySelector('input[ name = "monto"]');

const formatoUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        });
const formatoVES = new Intl.NumberFormat('es-VE', {
style: 'currency',
currency: 'VES'
            });

montoInput.focus();

// Tiempo máximo para considerar válida la caché (ej: 5 minutos)
const TIEMPO_MAX_CACHE = 5 * 60 * 1000; // 5 minutos en milisegundos

let tasaBCV = null;
let tasaBCVTime = null;
let tasaParalelo = null;
let tasaParaleloTime = null;

// Función para obtener la tasa BCV
function obtenerTasaBCV() {
    const ahora = Date.now();

        if (tasaBCV !== null && (ahora - tasaBCVTime) < TIEMPO_MAX_CACHE) {
            bcvInput.value = tasaBCV.toFixed(2);
            console.log('Usando tasa BCV desde memoria.');
                return;
                }

            // Obtener tasas automáticamente
            fetch('https://ve.dolarapi.com/v1/dolares/oficial')
                .then(res => {
                    if (!res.ok) throw new Error('Error en API principal');
                        return res.json();
                    })
                .then(data => {
                    tasaBCV = data.promedio;
                    tasaBCVTime = Date.now();//Guarda la hora
                    bcvInput.value = tasaBCV.toFixed(2); 
                    console.log('Tasa BCV obtenida del servidor.')
                })
                .catch(error => {
                    console.error('Error al obtener la tasa oficial:', error);
                            // Intentar otra API de respaldo
                        fetch('https://api.fixer.io/latest?access_key=TU_API_KEY&base=USD&symbols=VES')
                            .then(res => {
                                if (!res.ok) throw new Error('Error en API de respaldo');
                                    return res.json();})
                            .then(data => {
                                tasaBCV = data.promedio;
                                tasaBCVTime = Date.now();//Guarda la hora
                                bcvInput.value = tasaBCV.toFixed(2); 
                                console.log('Tasa BCV obtenida del servidor.');
                                console.log('Tasa BCV obtenida del respaldo y almacenada.');
                            })
                        .catch(error => {
                            console.error('Error también en API de respaldo:', error);
                            resultadoTexto.textContent = 'No se pudo obtener ninguna tasa.';
                        });
                    }
                )};
                
    
// Función para obtener la tasa Paralelo
function obtenerTasaParalelo() {
    const ahora = Date.now();

        if (tasaParalelo !== null && (ahora - tasaParaleloTime) < TIEMPO_MAX_CACHE) {
                paraleloInput.value = tasaParalelo.toFixed(2);
                console.log('Usando tasa Paralelo desde memoria.');
                    return;
                }
            fetch('https://ve.dolarapi.com/v1/dolares/paralelo')
                .then(res => {
                if (!res.ok) throw new Error('Error en API principal');
                    return res.json();
                })    
                .then(data => {
                    tasaParalelo = data.promedio;
                    tasaParaleloTime = Date.now();
                    paraleloInput.value = tasaParalelo.toFixed(2); 
                    console.log('Tasa Paralelo actualizada del servidor.');
                })
                .catch(error => {
                    console.error('Error en la api principal:', error);
                    fetch('https://pydolarve.org/')
                    .then(res => {
                        if (!res.ok) throw new Error('Error en API de respaldo');
                            return res.json();})
                    .then(data => {
                        tasaParalelo = data.promedio;
                        tasaParaleloTime = Date.now();
                        paraleloInput.value = tasaParalelo.toFixed(2); 
                        console.log('Tasa Paralelo actualizada del servidor.');
                    })
                .catch(error => {
                    console.error('Error también en API de respaldo:', error);
                    resultadoTexto.textContent = 'No se pudo obtener ninguna tasa.';
                });
            }) 
        }

// Llamamos las funciones al cargar la página
obtenerTasaBCV();
obtenerTasaParalelo();    
// Y además actualizamos cada 5 minutos
setInterval(() => {
    obtenerTasaBCV();
    obtenerTasaParalelo();
}, 5 * 60 * 1000); // 5 minutos en milisegundos

//Objeto selecionador de inputs
const inputs = {
    bcv: 'input[ name = "bcv"]',
    monto: 'input[ name = "monto"]',
    paralelo: 'input[ name = "paralelo"]'
};

//Funcion para obtener el valor de los inputs
const getInputValue = (name) => parseFloat(form.querySelector(inputs[name]).value);

//Funcion para limpiar los inputs
const clearInputValue = (name) => {
    form.querySelector('#monto').value = '';
};

//Funcion para ocultar los resultados
const toggleResultado = (mostrar) => {
    resultadoTexto.style.display = mostrar ? 'block' : 'none';
    resultadoTexto.innerHTML = ''; // Limpia el contenido al ocultar
};

//Funcion para mostrar los resultados en el parrafo 
const mostrarResultados = (resultados) => {
    resultadoTexto.innerHTML = ' <br> Resultados: <br> <hr> ';
        
        for (const key in resultados) {
            const valor = resultados[key];
            
            let valorFormateado = valor;
        
            if (key.toLowerCase().includes('bolivar')) {
                valorFormateado = formatoVES.format(valor);
            } 
            else if (
                key.includes('$') ||
                key.toLowerCase().includes('usd') ||
                key.toLowerCase().includes('dolar')
            ) {
                valorFormateado = formatoUSD.format(valor);
            }
        
            resultadoTexto.innerHTML += `<br><hr><strong>${key}:</strong> ${valorFormateado}`;
            }
        
            console.log("Resultados mostrados:", resultadoTexto.innerHTML);
        };
    



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        toggleResultado(true); //Mostrar resultados al calcular

        const bcv = getInputValue('bcv');
        const monto = getInputValue('monto');
        const paralelo = getInputValue('paralelo'); 
        const selectedCurrency = document.querySelector('input[ name = "radio"]:checked')?.value;

        if (monto <= 0){
            resultadoTexto.innerHTML +='<br> Monto igual 0 ';
            Object.keys(inputs).forEach(clearInputValue); // Limpia el input montos
            montoInput.focus(); // Mantener el foco en monto
                return;
            };

            let resultados = {};

            if (selectedCurrency === 'dolar') {
                    
                const resultadoBcv = (bcv * monto).toFixed(2);
                const resultadoParalelo = (paralelo * monto).toFixed(2);
                const totalPagadoUSD = (resultadoBcv  / paralelo).toFixed(2);
                const diferenciaBolivar = (resultadoParalelo - resultadoBcv).toFixed(2);
                const diferenciaUsd = (diferenciaBolivar  / paralelo).toFixed(2);

                resultados = {
                    'Total en bolivares a BCV': resultadoBcv,
                    'total en bolivares a Paralelo': resultadoParalelo,
                    'total pagado en $': totalPagadoUSD,
                    'diferencia en Bolivares': diferenciaBolivar,
                    'diferencia en $': diferenciaUsd
                };
            }
            
            else if (selectedCurrency === 'bolivar') {
                const resultadoBcv = (monto  / bcv) ;
                const resultadoParalelo = ( monto / paralelo);
                const diferenciaBolivar = (resultadoBcv - resultadoParalelo );
                const diferenciaUsd = (diferenciaBolivar  * paralelo); 
                const totalPagadoBS = (monto - diferenciaUsd); 
            

            resultados = {
                'Total en $ a BCV': resultadoBcv.toFixed(2),
                'total en $ a Paralelo': resultadoParalelo.toFixed(2),
                'total pagado bolivares': totalPagadoBS.toFixed(2), 
                'diferencia en $': diferenciaBolivar.toFixed(2),
                'diferencia en Bolivares': diferenciaUsd.toFixed(2)
            };
        }

        mostrarResultados(resultados);
        Object.keys(inputs).forEach(clearInputValue); // Limpiar todos los inputs despues de calcular
            montoInput.focus(); // Mantener el foco en monto
    });

    form.addEventListener('reset', (e) => {
        e.preventDefault();
            toggleResultado(false); //Ocultar los resultados al resetaer
            Object.keys(inputs).forEach(clearInputValue); // Limpia el input monto
                    montoInput.focus(); // Mantener el foco en monto
    });












//Fuinciones para llamar los inputs//
/*
const fomr = document.querySelector('#calculadora');
    fomr.addEventListener('submit', (e) => {

        const bcvInput = document.querySelector('input[ name = "bcv"]'); // Cambia el selector
            bcvInput.focus(); // Coloca el foco en el input BCV
        
        const cambioMoneda = new Intl.NumberFormat (value = 'es-VE', {style : 'currency', currency: 'VES',});

            e.preventDefault();
        
    
        const texto = document.querySelector('p')
            texto.innerHTML = ''; //Limpia el contenido
        
            // Muestra el elemento <p> cuando se hace el calculo
            texto.style.display = 'block'; // Muestra el parrafo

        const bcv = parseFloat(e.target.bcv.value);
        const monto = parseFloat(e.target.monto.value);
        const paralelo = parseFloat(e.target.paralelo.value);   
        const radiosUsd = document.getElementById ('dolar');
        const radiosBs = document.getElementById ('bolivar');

    
        const selectedCurrency = document.querySelector('input[ name = "radio"]:checked').value
        

        if (monto <= 0)
            {texto.innerHTML +='<br> Monto igual 0 ';
                e.target.bcv.value = '';
                e.target.monto.value = '';
                e.target.paralelo.value = '';
                    return;
            };

            let  
            resultadoBcv,
            resultadoParalelo, 
            resultadoBcvParalelo, 
            diferenciaBolivar, 
            diferenciaUsd;   
            

            if (selectedCurrency === 'dolar') {
                    
                resultadoBcv = (bcv * monto).toFixed(2);
                resultadoParalelo = (paralelo * monto).toFixed(2);
                resultadoBcvParalelo = (resultadoBcv  / paralelo).toFixed(2);
                diferenciaBolivar = (resultadoParalelo - resultadoBcv).toFixed(2);
                diferenciaUsd = (diferenciaBolivar  / paralelo).toFixed(2);  

                    texto.innerHTML +=('<br> Resultados:')
                    texto.innerHTML +=('<br> <hr> Total en Bolivares a BCV : ' + resultadoBcv);
                    texto.innerHTML +=('<br> <hr> Total en Bolivares a Paralelo: ' + resultadoParalelo);
                    texto.innerHTML +=('<br> <hr> Total Pagado: ' + resultadoBcvParalelo);
                    texto.innerHTML +=('<br> <hr> Diferencias en Bolivares: ' + diferenciaBolivar);
                    texto.innerHTML +=('<br> <hr> Diferencias en $: ' + diferenciaUsd); 
            };

        if (selectedCurrency === 'bolivar') {

            resultadoBcv = (monto  / bcv) ;
            resultadoParalelo = ( monto / paralelo);
            diferenciaBolivar = (resultadoBcv - resultadoParalelo );
            diferenciaUsd = (diferenciaBolivar  * paralelo); 
            totalPagadoBS = (monto  - diferenciaUsd ); 

                texto.innerHTML +=('<br> Resultados :')
                texto.innerHTML +=('<br> <hr> Total en $ a BCV: ' + resultadoBcv.toFixed(2));
                texto.innerHTML +=('<br> <hr> Total en $ a Paralelo: ' + resultadoParalelo.toFixed(2));
                texto.innerHTML +=('<br> <hr> Total Pagado: ' +  totalPagadoBS.toFixed(2));
                texto.innerHTML +=('<br> <hr> Diferencias en Bolivares: ' + diferenciaUsd.toFixed(2));
                texto.innerHTML +=('<br> <hr> Diferencias en $: ' + diferenciaBolivar.toFixed(2));

            };
    
    //Limpieza de inputs de forma manual
    e.target.bcv.value = '';
    e.target.monto.value = '';
    e.target.paralelo.value = '';

    });

// Funcion para resetear//
fomr.addEventListener('reset', (e) => {

    const bcvInput = document.querySelector('input[ name = "bcv"]'); // Cambia el selector
        bcvInput.focus(); // Coloca el foco en el input BCV

    const texto = document.querySelector('p');
        texto.innerHTML = ''; 

    document.querySelector('p').style.display = 'none'; //Esconde el parrafo al resetear
        
    });

    //Tabla de reseteo//
function reset () {
            
    const bcv = calculadora[ 'bcv'].value;
    const monto = calculadora[ 'monto'].value;
    const paralelo = calculadora[ 'paralelo'].value;

        };
        */