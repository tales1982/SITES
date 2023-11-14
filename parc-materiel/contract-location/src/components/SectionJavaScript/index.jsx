/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import './main.css'

const SectionJavaScript = () =>{

    const [dadosFormulario, setDadosFormulario] = useState({
        locDia: '',
        locPreco: '',
        pm012Dia:'',
        pm012Preco:'',
        locDia2: '',
        locPreco2: '',
        pm012Dia2:'',
        pm012Preco2:'',
        accLoc:'',
        accLocPreco:'',
        tabeDia:'',
        tadePreco:'',
        locz:'',
        loczPreco:'',
        pm014:'',
        pm014Preco:'',
        pm0133:'',
        pm0133Preco:'',

        // ... outros campos do seu formulário
      });


 
      const locDia = parseFloat(dadosFormulario.locDia) || 0;
      const locPreco = parseFloat(dadosFormulario.locPreco) || 0;
      const loc = locDia * locPreco;//=======result

      const pm012Dia = parseFloat(dadosFormulario.pm012Dia) || 0;
      const pm012Preco = parseFloat(dadosFormulario.pm012Preco) || 0;
      const pm012 = (pm012Dia * pm012Preco) * 0.10;//=======result

      const locDia2 = parseFloat(dadosFormulario.locDia2)|| 0;
      const locPreco2 = parseFloat(dadosFormulario.locPreco2)|| 0;
      const loc2 =  locDia2 * locPreco2 ;//=======result

      const pm012Dia2 = parseFloat(dadosFormulario.pm012Dia2)|| 0;
      const pm012Preco2 = parseFloat(dadosFormulario.pm012Preco2)|| 0;
      const pm0122 =  (pm012Dia2 * pm012Preco2) * 0.10;//=======result

      const tabeDia = parseFloat(dadosFormulario.tabeDia)|| 0;
      const tabePreco = parseFloat(dadosFormulario.tadePreco)|| 0;
      const tabe = tabeDia * tabePreco;//=======result

      const locz2 = parseFloat(dadosFormulario.locz)|| 0;
      const loczPreco = parseFloat(dadosFormulario.loczPreco)|| 0;
      const locz = locz2 * loczPreco;//=======result
   
      const pm0142 = parseFloat(dadosFormulario.pm014)|| 0;
      const pm014Preco = parseFloat(dadosFormulario.pm014Preco)|| 0;
      const pm014 = pm0142 * pm014Preco;//=======result

      const pm01332 = parseFloat(dadosFormulario.pm0133)|| 0;
      const pm0133Preco = parseFloat(dadosFormulario.pm0133Preco)|| 0;
      const pm0133 = pm01332 * pm0133Preco;//=======result

      const accLoc = parseFloat(dadosFormulario.accLocPreco)|| 0;

      const totoal = (loc + pm012 + loc2 + pm0122 + tabe + locz + pm014 + pm0133);
      const totoalPOrcento = totoal * 0.16;
      const ValorTotalRes = (totoal + totoalPOrcento)- accLoc;

    
    console.log(ValorTotalRes.toFixed(2))
    
  

    
    const manipularEnvioFormulario = (event) =>{
        event.preventDefault();

        console.log('Dados do formulário:', dadosFormulario);


    }
    const capturaValor = (event) => {
        const { name, value } = event.target;
        setDadosFormulario((prevDados) => ({
          ...prevDados,
          [name]: value,
        }));
      };
    
    return(
        <>
        <form onSubmit={manipularEnvioFormulario} className='formCol' id='form'>
            <div className='codPM--row'>
                <div className='codPM--col'>
                  <p className='font'>LOC</p>
                  <p className='font font--model'>LOCATIOIN </p>
                  <input className='inputModelo' type="text" placeholder='modelo' id='modelo'/>
               </div>
               <div className='codPM--col5'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="locDia" value={dadosFormulario.locDia} onChange={capturaValor} />
                  <p className='font'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="locPreco" value={dadosFormulario.locPreco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{loc.toFixed(2)}</span>
                  <p className='font'>16%</p>
               </div>
            </div>
            <div className='codPM--row'>
                <div className='pm012'>
                  <p >PM012</p>
                  <p className='font'>FRAIS ANNEXE PARTICIP. BRIS DE MACHINNE</p>
               </div>
               <div className='pm012--col'>
                  <input id='pm012Dia' className='inputJS' type="text"placeholder='dia 1,000' name="pm012Dia" value={dadosFormulario.pm012Dia} onChange={capturaValor} />
                  <p className='font pm12--p'>1,000</p>
                  <input id='pm012Preco' className='inputJS' type="text"placeholder='prix 00,000' name="pm012Preco" value={dadosFormulario.pm012Preco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{pm012.toFixed(2)}</span>
                  <p className='font font-por'>16%</p>
               </div>
            </div>
            <div className={`codPM--row ${dadosFormulario.locDia2 === '0' ? 'ocultarACCLOC ' : ''}`}>
                <div className='codPM--col2'>
                  <p className='font'>LOC-2</p>
                  <p className='font font--model2'>LOCATIOIN </p>
                  <input className='inputModelo2' type="text" placeholder='modelo' id='modelo2'/>
               </div>
               <div className='codPM--col5-2'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="locDia2" value={dadosFormulario.locDia2} onChange={capturaValor} />
                  <p className='font'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="locPreco2" value={dadosFormulario.locPreco2} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{loc2.toFixed(2)}</span>
                  <p className='font'>16%</p>
               </div>
            </div>
            <div className={`codPM--row ${dadosFormulario.pm012Dia2 === '0' ? 'ocultarACCLOC ' : ''}`}>
                <div className='pm012'>
                  <p >PM012-2</p>
                  <p className='font'>FRAIS ANNEXE PARTICIP. BRIS DE MACHINNE</p>
               </div>
               <div className='pm012--col'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="pm012Dia2" value={dadosFormulario.pm012Dia2} onChange={capturaValor} />
                  <p className='font pm12--p'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="pm012Preco2" value={dadosFormulario.pm012Preco2} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{pm0122.toFixed(2)}</span>
                  <p className='font font-por'>16%</p>
               </div>
            </div>
            <dir className='codPM--row'>
                <p className='fontSeg'>Une Franchise de 1.500,00 €uros, à la charge du locataire, est applicable en cas de bris de machine accidentelle</p>
            </dir>
            <div className={`codPM--row ${dadosFormulario.accLoc === '0' ? 'ocultarACCLOC ' : ''}`}>
                <div className='accloc pm012'>
                  <p >ACCLOC</p>
                  <p className='font'>ACCOMPTER SUR LOCATION</p>
               </div>
               <div className='accloc--col'>
                  <input className='inputJS' type="text"placeholder='-1.000' name="accLoc" value={dadosFormulario.accLoc} onChange={capturaValor} />
                  <p className='font pm12--p'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="accLocPreco" value={dadosFormulario.accLocPreco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>-{accLoc.toFixed(2)}</span>
                  <p className='font font-accloc'>16%</p>
               </div>
            </div>
            <div className={`codPM--row ${dadosFormulario.tabeDia === '0' ? 'ocultarACCLOC ' : ''}` }>
                <div className='tabe--col'>
                  <p className='font'>TABE</p>
                  <p className='font font--input'>LOCATIOIN BRH</p>
               </div>
               <div className='tabe--col5'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="tabeDia" value={dadosFormulario.tabeDia} onChange={capturaValor} />
                  <p className='font'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="tadePreco" value={dadosFormulario.tadePreco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{tabe.toFixed(2)}</span>
                  <p className='font font-brh'>16%</p>
               </div>
            </div>
            <div className={`codPM--row ${dadosFormulario.locz === '0' ? 'ocultarACCLOC ' : ''}` }>
                <div className='locz--col'>
                  <p className='font'>LOCZ</p>
                  <p className='font font--input'>TRANSPORTE ZONE</p>
               </div>
               <div className='locz--col5'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="locz" value={dadosFormulario.locz} onChange={capturaValor} />
                  <p className='font'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="loczPreco" value={dadosFormulario.loczPreco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{locz.toFixed(2)}</span>
                  <p className='font font-locz'>16%</p>
               </div>
            </div>
            <div className={`codPM--row ${dadosFormulario.pm014 === '0' ? 'ocultarACCLOC ' : ''}` }>
                <div className='pm014--col'>
                  <p className='font'>PM014</p>
                  <p className='font font--input'>NETTOYAGE MACHINE</p>
               </div>
               <div className='pm014--col5'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="pm014" value={dadosFormulario.pm014} onChange={capturaValor} />
                  <p className='font'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="pm014Preco" value={dadosFormulario.pm014Preco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{pm014.toFixed(2)}</span>
                  <p className='font font-pm014'>16%</p>
               </div>
            </div>
            <div className={`codPM--row ${dadosFormulario.pm0133 === '0' ? 'ocultarACCLOC ' : ''}` }>
                <div className='pm0133--col'>
                  <p className='font'>PM0133</p>
                  <p className='font font--input'>REMPLISAGEN DE DIESEL</p>
               </div>
               <div className='pm0133--col5'>
                  <input className='inputJS' type="text"placeholder='dia 1,000' name="pm0133" value={dadosFormulario.pm0133} onChange={capturaValor} />
                  <p className='font'>1,000</p>
                  <input className='inputJS' type="text"placeholder='prix 00,000' name="pm0133Preco" value={dadosFormulario.pm0133Preco} onChange={capturaValor}  />
               </div>
               <div className='codPM--col1'>
                <span className='resultInput'>{pm0133.toFixed(2)}</span>
                  <p className='font font-pm0133'>16%</p>
               </div>
            </div>
             <div className='resultadoCod-col'>
               <div className='resultadoCod-row'>
                <p className='resultadoCod-p resultadoCod-p1 p-strong'>Rècapitulatif :</p>
                <p className='resultadoCod-p resultadoCod-p2'>Montant Imposable</p>
                <p className='resultadoCod-p resultadoCod-p3'>Code T.V.A</p>
                <p className='resultadoCod-p resultadoCod-p4'>Montant T.V.A</p>
                <p className='resultadoCod-p resultadoCod-p5'>Total Hors T.V.A</p>
                <p className='resultadoCod-p resultadoCod-p6'>{totoal.toFixed(2)}</p>
               </div>
            </div>
            <div className='resultadoCod2-col'>
               <div className='resultadoCod-row'>
                <p className='resultadoCod-p resultadoCod-p11'>{totoal.toFixed(2)}</p>
                <p className='resultadoCod-p resultadoCod-p22'>16%</p>
                <p className='resultadoCod-p resultadoCod-p33'>{totoalPOrcento.toFixed(2)}</p>
                <p className='resultadoCod-p resultadoCod-p44'>Total T.V.A</p>
                <p className='resultadoCod-p resultadoCod-p55'>{totoalPOrcento.toFixed(2)}&nbsp;&nbsp;&nbsp; 16% </p>      
               </div>
            </div>
            <div className='resultadoCod3'>
               <div className='resultadoCod3-row'>
               <p className='resultadoCod3-row-p1'>Total T.T.C</p>
               <p className='resultadoCod3-row-p2'>{ValorTotalRes}</p>
               </div>
            </div>
        </form>
        
        </>
    )
}

export default SectionJavaScript;