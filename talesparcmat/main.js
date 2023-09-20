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
const PM014 = document.querySelector('#PM014');//div da limpeza
const lipezaHoras = document.querySelector('#inputHorasDeLimpesa')//Horas de limpesa
const inputLinpeza = document.querySelector('#interacao_preco__limpesa');//inpute do valor da limpeza.
const valorLimpezaRsultado = document.querySelector('#valor_total__limpesa');//resultado 
const PM0133 = document.querySelector('#PM0133');//div do diesel
const inputLitrosDisel = document.querySelector('#ĺitrosPm0133');//Litros de disel usando
const inputPrecoDiesel = document.querySelector('#precoPm0133');//valor do diesel
const paragrofoResultadoDisel = document.querySelector('#resultadoPm0133');//onde vai o resultado 
const precoFinalCliente = document.querySelector('#preco_final');//preco final
const totalHorsTVA = document.querySelector('#paragrafo-6');
const montantImposable = document.querySelector('#paragrafo-7');
const montantTVA = document.querySelector('#paragrafo-9');
const totalTVA = document.querySelector('#paragrafo-11');
const prix_TOTAL = document.querySelector('#preco_final');
const divTabe = document.querySelector('#tabe');//DivTabe
const inputDiasTabe = document.querySelector('#diasTabe');//Input dia BRH
const inputPrecoTabe = document.querySelector('#precoTabe');//Input do preco do brh
const valorFinalTabe = document.querySelector('#valorTotalTabe');//Onde vao o resultado do BRH


/*====================================================== */
botaoEnviar.addEventListener('click', function (ev) {
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
    tabe()
    calcularTVA()
   
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
function cautionValor() {
    const valorCaution = parseFloat(caution.value);
    if (valorCaution == 0) {
        ACCLOC.style.display = 'none';
        return valorCaution;
    } else {
        const cautionResultado = document.querySelector('#valor_total__caution');
        cautionResultado.textContent = `-${valorCaution.toFixed(1)}`;
    }

    return valorCaution;
}
function transporteLoC() {
    const transporte = parseFloat(transporteIdaVolta.value);
    if (transporte == 0) {
        LOCZ.style.display = 'none';
        return transporte
    } else {
        const transporteIdaVoltaNum = parseFloat(transporteIdaVolta.value);
        const precoTransporte = parseFloat(inputValorTransport.value);
        const totalDoTransporte = precoTransporte * transporteIdaVoltaNum;
        resultadoTransporte.textContent = `${totalDoTransporte.toFixed(2)}`;
        return totalDoTransporte
    }

}
function limpeza() {
    const valorLimpeza = parseFloat(inputLinpeza.value);
    const HorasLimpesa = parseFloat(inputHorasDeLimpesa.value);
    const ValorFinalLimpeza = valorLimpeza * HorasLimpesa

    if (valorLimpeza == 0) {
        PM014.style.display = 'none';
        return valorLimpeza;
    } else {
        valorLimpezaRsultado.textContent = `${ValorFinalLimpeza.toFixed(2)}`;
        return valorLimpeza;
    }


}
function diesel() {
    const litrosDiesel = parseFloat(inputLitrosDisel.value);
    const precoDoDiesel = parseFloat(inputPrecoDiesel.value);
    if (litrosDiesel == 0) {
        PM0133.style.display = 'none';
        return litrosDiesel;
    } else {
        const totaPagarDiesel = precoDoDiesel * litrosDiesel;
        paragrofoResultadoDisel.textContent = `${totaPagarDiesel.toFixed(2)}`
        return totaPagarDiesel;
    }
}
function tabe(){
    const valorInputDia = parseFloat(inputDiasTabe.value);
    const precoTabe = parseFloat(inputPrecoTabe.value);
    const valorFinalTabeNum =  precoTabe * valorInputDia;


    if (valorInputDia == 0) {
        divTabe.style.display = 'none';
        return valorInputDia;
    } else {
        valorFinalTabe.textContent = `${valorFinalTabeNum.toFixed(2)}`;
        
        return valorFinalTabeNum;
    }
}
 function calcularTVA(){
        const diaTVA = calcularDias();
        const seguroTVA = calculaSeguro();
        const cautionTVA = cautionValor();
        const brhTVA = tabe();
        const transportTVA = transporteLoC();
        const limpezaTVA = limpeza();
        const dieselTVA = diesel();
        const soma = (diaTVA + seguroTVA + brhTVA + transportTVA + limpezaTVA + dieselTVA) - cautionTVA
        montantImposable.textContent = soma.toFixed(2);
        const tva = soma  * 0.16;

        montantTVA.textContent = tva.toFixed(2); 
        totalHorsTVA.textContent = soma.toFixed(2);
        totalTVA.textContent = tva.toFixed(2); 
        const TOTAL = tva + soma;
        prix_TOTAL.textContent = TOTAL.toFixed(2)  
        //console.log(seguroTVA)
        //console.log(cautionTVA)
        console.log(brhTVA)
        //console.log(transportTVA)
        //console.log(limpezaTVA)
        //console.log(diaTVA)
        //console.log(dieselTVA)
        //console.log(soma)
        //console.log(montantImposable)
        //console.log(tva)
        //console.log(TOTAL)
        //console.log(prix_TOTAL)
}
