import "./main.css";

const SectionDados2 = () => {
  return (
    <>
      <div className="flexColum">
        <div className="flexColun-1">
          <div className="flexColum1-row">
            <label className="section2--label" htmlFor="inicio">Début location :</label>
            <input className="inicioInput" type="text" placeholder="00/00/00" id="inicio"/>
            <span><strong>à</strong></span>
            <input className="inicioInput" type="text"placeholder="08 : 00" id="horainicio"/>
            <span><strong>heures</strong></span>
          </div>
          <div className="flexColum1-row">
            <label className="section2--label" htmlFor="dataFin">Fin de location :</label>
            <input className="inicioInput" type="text" placeholder="00/00/00" id="dataFin"/>
            <span><strong>à</strong></span>
            <input className="inicioInput" type="text"placeholder="17 : 00" id="horaFin"/>
            <span><strong>heures</strong></span>
          </div>
        </div>
        <div className="flexColun-2">
          <div className="flexColum1-row">
            <label htmlFor="horasDaMaquina"><strong>Compteur d{`'`}heures à l{`'`}enlèvement :</strong></label>
            <input className="inicioInput" type="text" placeholder="0000" id="horasDaMaquina"/><span><strong>heures</strong></span>
          </div>
          <div className="flexColum1-row">
            <label htmlFor="horasDaMaquina2"><strong>Compteur d{`'`}heures au retur :</strong></label>
            <input className="inicioInput inicioInputspace" type="text" placeholder="0000"id="horasDaMaquina2"/><span><strong>heures</strong></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDados2;
