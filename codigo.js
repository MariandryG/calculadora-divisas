//Constantes generales//
const resultadoTexto = document.querySelector('p');
const formatoVES = new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES'
    });

const formatoUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        });
    
const bcvInput = document.querySelector('input[ name = "bcv"]');



//Objeto selecionador de inputs
const inputs = {
    bcv: 'input[ name = "bcv"]',
    monto: 'input[ name = "monto"]',
    paralelo: 'input[ name = "paralelo"]'
};

//Funcion para obtener el valor de los inputs
const getInputValue = (name) => parseFloat(fomr.querySelector(inputs[name]).value);

//Funcion para limpiar los inputs
const clearInputValue = (name) => {
    fomr.querySelector(inputs[name]).value = '';
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
    


const fomr = document.querySelector('#calculadora');
    fomr.addEventListener('submit', (e) => {
        e.preventDefault();

        toggleResultado(true); //Mostrar resultados al calcular

        const bcv = getInputValue('bcv');
        const monto = getInputValue('monto');
        const paralelo = getInputValue('paralelo'); 
        const selectedCurrency = document.querySelector('input[ name = "radio"]:checked')?.value;

        if (monto <= 0){
            resultadoTexto.innerHTML +='<br> Monto igual 0 ';
            Object.keys(inputs).forEach(clearInputValue); // Limpiar todos los inputs
            bcvInput.focus(); // Mantener el foco en BCV
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
                const totalPagadoBS = (monto  - diferenciaUsd ); 
            

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
            bcvInput.focus(); // Mantener el foco en BCV
    });

    fomr.addEventListener('reset', (e) => {

    toggleResultado(false); //Ocultar los resultados al resetaer
    Object.keys(inputs).forEach(clearInputValue); // Limpiar todos los inputs despues de resetear
            bcvInput.focus(); // Mantener el foco en BCV
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