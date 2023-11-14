import './main.css'

const SectionDados3 = () => {

    return(
        <>
        <div className='section3--col'>
            <div className='section3--row' >
                <label className='sectionDadosLabel-3' htmlFor="tempoloc"> Période de location <span className="element-com-seta"></span></label>
                <input className='sectionDadosInput-1' type="text" id='tempoloc' placeholder='00'/>
                <select className='select' name="dias" id="dias"><option value="dias">Jour</option><option value="jours">Jours</option></select>
            </div>
            <div className='section3--row' >
                <label className='sectionDadosLabel-3' htmlFor="contato"> Contact client <span className="element-com-seta"></span></label>
                <input className='sectionDadosInput-2' type="text" id='contato'/>
            </div>
            <div className='section3--row' >
                <label className='sectionDadosLabel-3' htmlFor="chatier"> Chantier <span className="element-com-seta"></span></label>
                <input className='sectionDadosInput-2' type="text" id='chatier'/>
            </div>

            <div className='section3--row' ></div>
            <div className='section3--row' ></div>

        </div>
        </>
    )
}

export default SectionDados3;import './main.css'