import "./main.css";

const DadosPelle = () => {
  return (
    <>
      <div className="dados--row">
        <dir className="dados--div-8">
          <div className="dados--coluna">
            <div className="dados--div">
                 <label className="dados--labelB" htmlFor="Contrato">
              Contrat de location n° :
            </label>
            <input
            id="Contrato"
              className="dados--input"
              type="text"
              placeholder="N° Contrat"
            />
            </div>
            <div className="dados--div">
               <label className="dados--label" htmlFor="cliente">
              Client :
            </label>
            <input id="cliente" className="dados--input" type="text" placeholder="Client" /> 
            </div>
            <div className="dados--div">
               < p className="dados--paragrafo" htmlFor="cliente">
              Etabli par : Location
            </p>
            </div>
          </div>
        </dir>
        <dir className="dados--div-4">
          <label className="dados--labelB" htmlFor="data">
            Date :
          </label>
          <input id="data" className="dados--input" type="text" placeholder="Date" />
        </dir>
      </div>
    </>
  );
};

export default DadosPelle;
