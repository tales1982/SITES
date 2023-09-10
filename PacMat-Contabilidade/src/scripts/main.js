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
    calcularDias()
    calculaSeguro()


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
    return resultadoValorSeguro;
}