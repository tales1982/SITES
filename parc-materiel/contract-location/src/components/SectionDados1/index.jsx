// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./main.css";



const SectionDados1 = () => {


  return (
    <>
      <div className="dados">
        <div className="dadosFlex-4">
            <div className="dadosFlexSpace">
                <label htmlFor="material">Matériel :</label>
                <input className="section1--input dados--input" type="text" id="material" placeholder="Mini-Pelle"/>
            </div>
            <div className="dadosFlexSpace">
                <label htmlFor="type">Type :</label>
                <input className="section1--input dados--input" type="text" id="type" placeholder="Vio.."/>
            </div>
            <div className="dadosFlexSpace">
                <label htmlFor="equipamento">Equipament :</label>
                <input className="section1--input dados--input" type="text" id="equipamento" placeholder="godets"/>
            </div>
        </div>
        <div className="dadosFlex-8">
          <div className="dadosFlexSpace2">
              <label htmlFor="marqua">Maque :</label>
              <input className="section1--input dados--input" type="text" id="marqua" placeholder="Yamar"/>
          </div>
          <div className="dadosFlexSpace2">
              <label htmlFor="serie">N° de Série :</label>
              <input className="section1--input dados--input" type="text" id="serie" placeholder="...0000"/>
          </div>
          <div className="dadosFlexSpace2">
              <label htmlFor="opcoes">Option :</label>
              <input className="section1--input dados--input" type="text" id="opcoes" placeholder=" / "/>
          </div>
        </div>
        <div className="dadosFles-0">

        </div>
      </div>
    </>
  );
};

export default SectionDados1;