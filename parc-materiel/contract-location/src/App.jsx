/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HeaderImg from "./components/HeaderImagen";
import DadosPelle from './components/HeaderDadosPelle'
import TextBord from "./components/TestBord";
import SectionDados1 from "./components/SectionDados1";
import SectionDados2 from "./components/SectionDados2";
import SectionDados3 from "./components/SectionDados3";
import SectionJavaScript from "./components/SectionJavaScript";
import SectionDados4 from './components/SectionDados4';
import "./GlobalStyled.css";
import SectionDados5 from './components/SectionDados5';

function App() {
  const senhaCorreta = '170465'; // Defina a senha correta
  const [senhaValida, setSenhaValida] = useState(false);

  const validarSenha = () => {
    const senhaDigitada = prompt('Digite a Senha');
    setSenhaValida(senhaDigitada === senhaCorreta);
  };

  // Se a senha não foi validada, exibe apenas um botão para validar
  if (!senhaValida) {
    return (
      <div className="container">
        <button onClick={validarSenha} className='btn'>Validar Senha</button>
      </div>
    );
  }

  // Se a senha foi validada, exibe o conteúdo da página
  return (
    <div className="container">
      <HeaderImg />
      <DadosPelle />
      <TextBord />
      <SectionDados1 />
      <SectionDados2 />
      <SectionDados3 />
      <SectionJavaScript />
      <SectionDados4 />
      <SectionDados5 />
    </div>
  );
}

export default App;