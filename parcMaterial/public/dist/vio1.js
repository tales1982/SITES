"use strict";
const buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", () => {
    //capturando Hora
    const horaElement = document.querySelector(".fhrs");
    const valorHora = horaElement.value;
    const inputElement = horaElement;
    let placeholderValueHora = inputElement.placeholder;
    placeholderValueHora = valorHora;
    localStorage.setItem("ValorHoraSalva", placeholderValueHora);
    const horaElement2 = document.querySelector("#fhrs2");
    const valorHora2 = horaElement2.value;
    const inputElement2 = horaElement2;
    let placeholderValueHora2 = inputElement2.placeholder;
    placeholderValueHora2 = valorHora2;
    localStorage.setItem("ValorHoraSalva2", placeholderValueHora2);
    const horaElement3 = document.querySelector("#fhrs3");
    const valorHora3 = horaElement3.value;
    const inputElement3 = horaElement3;
    let placeholderValueHora3 = inputElement3.placeholder;
    placeholderValueHora3 = valorHora3;
    localStorage.setItem("ValorHoraSalva3", placeholderValueHora3);
    //capturando Disponibilidade
    const dispElement = document.querySelector(".fdisp");
    const valordisp = dispElement.value;
    const inputdisp = dispElement;
    let placeholderValuedisp = inputdisp.placeholder;
    placeholderValuedisp = valordisp;
    localStorage.setItem("ValordispSalvo", placeholderValuedisp);
    const dispElement2 = document.querySelector("#fdisp2");
    const valordisp2 = dispElement2.value;
    const inputdisp2 = dispElement2;
    let placeholderValuedisp2 = inputdisp2.placeholder;
    placeholderValuedisp2 = valordisp2;
    localStorage.setItem("ValordispSalvo2", placeholderValuedisp2);
    const dispElement3 = document.querySelector("#fdisp3");
    const valordisp3 = dispElement3.value;
    const inputdisp3 = dispElement3;
    let placeholderValuedisp3 = inputdisp3.placeholder;
    placeholderValuedisp3 = valordisp3;
    localStorage.setItem("ValordispSalvo3", placeholderValuedisp3);
    //capturando Nome
    const nomeElement = document.querySelector("#fname");
    const valorNome = nomeElement.value;
    const inputNome = nomeElement;
    let placeholderValueNome = inputNome.placeholder;
    placeholderValueNome = valorNome;
    localStorage.setItem("ValorNomeSalvo", placeholderValueNome);
    const nomeElement2 = document.querySelector("#fname2");
    const valorNome2 = nomeElement2.value;
    const inputNome2 = nomeElement2;
    let placeholderValueNome2 = inputNome2.placeholder;
    placeholderValueNome2 = valorNome2;
    localStorage.setItem("ValorNomeSalvo2", placeholderValueNome2);
    const nomeElement3 = document.querySelector("#fname3");
    const valorNome3 = nomeElement3.value;
    const inputNome3 = nomeElement3;
    let placeholderValueNome3 = inputNome3.placeholder;
    placeholderValueNome3 = valorNome3;
    localStorage.setItem("ValorNomeSalvo3", placeholderValueNome3);
    //capturando telefone
    const telElement = document.querySelector("#ftel");
    const valorTel = telElement.value;
    const inputTel = telElement;
    let placeholderValueTel = inputTel.placeholder;
    placeholderValueTel = valorTel;
    localStorage.setItem("ValorTelSalvo", placeholderValueTel);
    const telElement2 = document.querySelector("#ftel2");
    const valorTel2 = telElement2.value;
    const inputTel2 = telElement2;
    let placeholderValueTel2 = inputTel2.placeholder;
    placeholderValueTel2 = valorTel2;
    localStorage.setItem("ValorTelSalvo2", placeholderValueTel2);
    const telElement3 = document.querySelector("#ftel3");
    const valorTel3 = telElement3.value;
    const inputTel3 = telElement3;
    let placeholderValueTel3 = inputTel3.placeholder;
    placeholderValueTel3 = valorTel3;
    localStorage.setItem("ValorTelSalvo3", placeholderValueTel3);
});
//Lendo valores do localStorange
window.addEventListener("load", function () {
    //Hora
    const inputHora = document.querySelector("#fhrs");
    const valorHora = this.localStorage.getItem("ValorHoraSalva");
    if (valorHora) {
        inputHora.value = valorHora;
    }
    const inputHora2 = document.querySelector("#fhrs2");
    const valorHora2 = this.localStorage.getItem("ValorHoraSalva2");
    if (valorHora2) {
        inputHora2.value = valorHora2;
    }
    const inputHora3 = document.querySelector("#fhrs3");
    const valorHora3 = this.localStorage.getItem("ValorHoraSalva3");
    if (valorHora3) {
        inputHora3.value = valorHora3;
    }
    //Disponivel
    const inputdisp = document.querySelector("#fdisp");
    const valordisp = this.localStorage.getItem("ValordispSalvo");
    if (valordisp) {
        inputdisp.value = valordisp;
    }
    const inputdisp2 = document.querySelector("#fdisp2");
    const valordisp2 = this.localStorage.getItem("ValordispSalvo2");
    if (valordisp2) {
        inputdisp2.value = valordisp2;
    }
    const inputdisp3 = document.querySelector("#fdisp3");
    const valordisp3 = this.localStorage.getItem("ValordispSalvo3");
    if (valordisp3) {
        inputdisp3.value = valordisp3;
    }
    //Nome
    const inputNome = document.querySelector("#fname");
    const valorNome = this.localStorage.getItem("ValorNomeSalvo");
    if (valorNome) {
        inputNome.value = valorNome;
    }
    const inputNome2 = document.querySelector("#fname2");
    const valorNome2 = this.localStorage.getItem("ValorNomeSalvo2");
    if (valorNome2) {
        inputNome2.value = valorNome2;
    }
    const inputNome3 = document.querySelector("#fname3");
    const valorNome3 = this.localStorage.getItem("ValorNomeSalvo3");
    if (valorNome3) {
        inputNome3.value = valorNome3;
    }
    //telefone
    const inputTel = document.querySelector("#ftel");
    const valorTel = this.localStorage.getItem("ValorTelSalvo");
    if (valorTel) {
        inputTel.value = valorTel;
    }
    const inputTel2 = document.querySelector("#ftel2");
    const valorTel2 = this.localStorage.getItem("ValorTelSalvo2");
    if (valorTel2) {
        inputTel2.value = valorTel2;
    }
    const inputTel3 = document.querySelector("#ftel3");
    const valorTel3 = this.localStorage.getItem("ValorTelSalvo3");
    if (valorTel3) {
        inputTel3.value = valorTel3;
    }
});
/*
//================ amazon s3 =======================
import { S3 } from 'aws-sdk';

// Configurar as credenciais da AWS
const accessKeyId = 'tales_lima_1982@hotmail.com';
const secretAccessKey = 'Theo22Thomas22@';

Criar uma instância do serviço S3
const s3 = new S3({
  region: 'UE (Paris) eu-west-3', // substitua pela região desejada
  accessKeyId,
  secretAccessKey,
});

// Função para enviar os dados para o S3
function saveDataToS3(data: any) {
  const bucketName = 's3://parcmaterial'; // substitua pelo nome do seu bucket no S3

  const params = {
    Bucket: bucketName,
    Key: 'data.json', // substitua pelo nome do arquivo e local de armazenamento desejado
    Body: JSON.stringify(data),
  };

  // Enviar os dados para o S3
  s3.putObject(params, (err, data) => {
    if (err) {
      console.error('Erro ao enviar os dados para o S3:', err);
    } else {
      console.log('Dados enviados com sucesso para o S3');
    }
  });
}


// Exemplo de uso
buttonElement.addEventListener('click', () => {
    // Capturar os dados do formulário
    const horaElement = document.querySelector('#fhrs') as HTMLInputElement;
    const valorHora = horaElement.value;
    // ... capturar outros valores do formulário
  
    // Criar um objeto com os dados
    const data = {
      ValorHoraSalva: valorHora,
      // ... outros campos com seus respectivos valores
    };
  
    // Enviar os dados para o S3
    saveDataToS3(data);
  });

 =======================================================================
  */ 
