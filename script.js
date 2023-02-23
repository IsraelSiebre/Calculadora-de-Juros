var capital = document.querySelector('#capital');
var tempo = document.querySelector('#tempo');
var taxa = document.querySelector('#taxa');
var btcalcular = document.querySelector('#btcalcular');
var tipo = document.querySelector('#sbutton');
var stempo = document.querySelector('#stempo');
var staxa = document.querySelector('#staxa');
var container = document.querySelector('#container2');
var btlimpar = document.querySelector('#btlimpar');


btcalcular.addEventListener('click', function(){
    if (capital.value != '' && taxa.value != '' && tempo.value != '') {
        if (stempo.value === 'Anos') {
            var tempof = tempo.value * 12;
        } else {
            var tempof = tempo.value;
        }

        if (staxa.value === 'aa') {
            var taxaf = taxa.value / 12;
        } else {
            var taxaf = taxa.value;
        }

        if (tipo.value === 'jc') {
            var montante = capital.value * Math.pow(1+(taxaf/100), tempof);
            var juros = montante - capital.value;

            m.innerHTML = `R$ ${montante.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
            j.innerHTML = `R$ ${juros.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
            
            container.classList.remove('hide');
        } else {
            var juros = capital.value * (taxaf/100) * tempof;
            var montante = parseFloat(capital.value) + (capital.value * (taxaf/100) * tempof);
        
            m.innerHTML = `R$ ${montante.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
            j.innerHTML = `R$ ${juros.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;

            container.classList.remove('hide'); 
        }
    } else {
        alert("Preencha todos os campos corretamente!")
      }
});

btlimpar.addEventListener('click', function(){
    capital.value = '';
    taxa.value = '';  
    tempo.value = '';

    container.classList.add('hide');
});