const botaoEnviar = document.querySelector('#btn');
const material = document.querySelector('#material');//Material alugado mini pele ou placa etc.
const spanMaterial = document.querySelector('#interacao_material') // capturando o span material
const type = document.querySelector('#modelo') // capturando o span do typo da maquina
const spanType = document.querySelector('#interacao_typo') // capturando o span do typo da maquina
const serie = document.querySelector('#serie') // capturando o span de n° serie da maquina
const spanSerie = document.querySelector('#interacao_serie') // capturando o span do typo da maquina
const diasAlugados = document.querySelector('#interacao_quantidades__dias');// capturando os dias que vai usar a maquina
const precoPorDia = document.querySelector('#interacao_preco');//capturando o valor da maquina
resultValorTotal = document.querySelector('#valor_total')// onde vai o resultado da soma dias e preco
const diasSeguro = document.querySelector('#interacao_quantidades__dias__seguro');//capturando input de dias do seguro
const precoSeguro = document.querySelector('#interacao_preco__seguro');//capiturando o preco do seguro
const resultadoValorSeguro = document.querySelector('#valor_total__seguro')
const ACCLOC = document.querySelector('#ACCLOC')//Capiturando a div
const caution = document.querySelector('#interacao_preco__caution')//capiturando o caution
const transporte = document.querySelector('#LOCZ');//capturando a div de transporte
const transporteIdaVolta = document.querySelector('#interacao_quantidades__dias__transporte');// capturando valor do input ida e volta
const inputValorTransport = document.querySelector('#interacao_preco__transporte');//capiturando o input do preco do transporte
const resultadoTransporte = document.querySelector('#valor_total__transporte')//Onde o resultado do transporte vai
const inputLinpeza = document.querySelector('#interacao_preco__limpesa');//inpute do valor da limpeza.
const PM0133 = document.querySelector('#PM0133');//div do diesel
const inputLitrosDisel = document.querySelector('#ĺitrosPm0133');//Litros de disel usando
const inputPrecoDiesel = document.querySelector('#precoPm0133');//valor do diesel
const paragrofoResultadoDisel = document.querySelector('#resultadoPm0133');//onde vai o resultado 


botaoEnviar.addEventListener('click', function(ev) {
    ev.preventDefault();

    // enjetando o materia no span
    const valorMaterial = material.value;
    spanMaterial.textContent = valorMaterial;

    //enjetando o type no span
    const valorTypo = type.value;
    spanType.textContent = valorTypo;

    //ejetando o n° de serie
    const valorSerie = serie.value;
    spanSerie.textContent = valorSerie;
    calcularDias();
    calculaSeguro();
    cautionValor();
    transporteLoC();
    limpeza();
    diesel()

});
function calcularDias() {
    const precoMaquinaNum = parseFloat(precoPorDia.value);
    const diasAlugadosNum = parseFloat(diasAlugados.value);
    const somaDiaPreco = precoMaquinaNum * diasAlugadosNum;
    resultValorTotal.textContent = somaDiaPreco.toFixed(2);
    return somaDiaPreco;
}
function calculaSeguro() {
    const diasSeguroNum = parseFloat(diasSeguro.value);
    precoSeguroNum = parseFloat(precoSeguro.value);
    const somaDiaPrecoSeguro = precoSeguroNum * diasSeguroNum;
    const procentagenSeguro = (somaDiaPrecoSeguro * 10) / 100;
    resultadoValorSeguro.textContent = procentagenSeguro.toFixed(2)
    return procentagenSeguro;
}
function cautionValor(){
    const valorCaution = parseFloat(caution.value);
    if(valorCaution == 0){
        ACCLOC.style.display = 'none';
    }else{
        const cautionResultado = document.querySelector('#valor_total__caution');
        cautionResultado.textContent = `-${valorCaution},00`;
    }

    return valorCaution;
}
function transporteLoC(){
    const transporte = parseFloat(transporteIdaVolta.value);
    if(transporte == 0){
        LOCZ.style.display = 'none';
    }else{       
        const transporteIdaVoltaNum = parseFloat(transporteIdaVolta.value)
        const precoTransporte = parseFloat(inputValorTransport.value)
        const totalDoTransporte = precoTransporte * transporteIdaVoltaNum
        resultadoTransporte.textContent = `${totalDoTransporte},00`
        return totalDoTransporte
    }
   
}
function limpeza(){
    const valorLimpeza = parseFloat(inputLinpeza.value);
    if(valorLimpeza == 0){
        PM014.style.display = 'none';
    }else{
        const valorLimpezaRsultado = document.querySelector('#valor_total__limpesa');
        valorLimpezaRsultado.textContent = `${valorLimpeza},00`;
    }

    return valorLimpeza;
}
function diesel(){
    const litrosDiesel = parseFloat(inputLitrosDisel.value);
    
    if(litrosDiesel == 0){
        PM0133.style.display = 'none';
    }else{
        const precoDoDiesel = parseFloat(inputPrecoDiesel.value);
        const totaPagarDiesel = precoDoDiesel * litrosDiesel;
        paragrofoResultadoDisel.textContent = `${totaPagarDiesel}00`
        return totaPagarDiesel;
}
}
    