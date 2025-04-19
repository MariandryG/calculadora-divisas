//Constantes generales//
    const resultado3 = document.querySelector('#resultado'); 
    const buttons = document.querySelector('#envio'); 


//Fuinciones para llamar los inputs//

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