//Constantes generales//
    const resultado3 = document.querySelector('#resultado'); 
    const buttons = document.querySelector('#envio'); 


//Fuinciones para llamar los inputs//

const fomr = document.querySelector('#calculadora');
    fomr.addEventListener('submit', (e) => {
        
        const cambioMoneda = new Intl.NumberFormat (value = 'es-VE', {style : 'currency', currency: 'VES',});

        e.preventDefault();
            
        const texto = document.querySelector('p')
        texto.innerHTML = ''; //Limpia el contenido

        const bcv = parseFloat(e.target.bcv.value);
        const monto = parseFloat(e.target.monto.value);
        const paralelo = parseFloat(e.target.paralelo.value);   
        const radiosUsd = document.getElementById ('dolar');
        const radiosBs = document.getElementById ('bolivar');

    
        const selectedCurrency = document.querySelector('input[ name = "radio"]:checked').value

        if (monto <= 0)
            {texto.innerHTML +='<br> Monto igual 0 ';
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
        resultadoBcvParalelo = (resultadoBcv / paralelo).toFixed(2);
                
        diferenciaBolivar = (resultadoParalelo -  resultadoBcv).toFixed(2);
        diferenciaUsd = (diferenciaBolivar / paralelo).toFixed(2);  

        texto.innerHTML +=('<br> Total en Bolivares a BCV : ' + resultadoBcv);
        texto.innerHTML +=('<br> Total en Bolivares a Paralelo: ' + resultadoParalelo);
        texto.innerHTML +=('<br> Total Pagado: ' + resultadoBcvParalelo);
        texto.innerHTML +=('<br> Diferencias en Bolivares: ' + diferenciaBolivar);
        texto.innerHTML +=('<br> Diferencias en $: ' + diferenciaUsd); 
    };

    if (selectedCurrency === 'bolivar') {

        resultadoBcv = (monto / bcv).toFixed(2) ;
        resultadoParalelo = ( monto / paralelo ).toFixed(2);
                        
        diferenciaBolivar = (resultadoBcv - resultadoParalelo).toFixed(2);
        diferenciaUsd = (diferenciaBolivar * paralelo).toFixed(2); 
        resultadoBcvParalelo = (monto - diferenciaUsd).toFixed(2); 

        texto.innerHTML +=('<br> Total en $ a BCV: ' + resultadoBcv);
        texto.innerHTML +=('<br> Total en $ a Paralelo: ' + resultadoParalelo);
        texto.innerHTML +=('<br> Total Pagado: ' + resultadoBcvParalelo);
        texto.innerHTML +=('<br> Diferencias en Bolivares: ' + diferenciaUsd);
        texto.innerHTML +=('<br> Diferencias en $: ' + diferenciaBolivar); 
    };

});

   //Tabla de reseteo
function reset () {
            
    const bcv = calculadora[ 'bcv'].value;
    const monto = calculadora[ 'monto'].value;
    const paralelo = calculadora[ 'paralelo'].value;
        };