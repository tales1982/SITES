document.addEventListener('DOMContentLoaded', function () {

    // Capturando todos os botões pelo atributo data (data-tab-button)
    const buttons = document.querySelectorAll('[data-tab-button]');

    //capturando a div faq
    const questions = document.querySelectorAll(`[data-faq-question]`);
    //capturando a a section  hero
    const heroSection = document.querySelector('.hero');

    //capturando a altura da section hero como (clientHeight)
    const alturaHero = heroSection.clientHeight

    //Agora crie uma funcao pra fazer a verificacao da altura da rolagem no html
    window.addEventListener('scroll',function(){
        const possicaoAtual = window.scrollY;

        if(possicaoAtual < alturaHero){
            ocultarElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })


    //Section de atracoes
    for (let i = 0; i < buttons.length; i++) { // Correção: "letgth" para "length"
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;        
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            esconderTodasAbas();
            aba.classList.add('shows__list--is-active'); // Correção: "abaAlvo" para "aba"
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }


    //Section FAQ, accordion    
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click',abreOuFechaResposta);
    }

})

function ocultarElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo(){
const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function esconderTodasAbas() {
    const tabsContainer = document.querySelectorAll(`[data-tab-id]`);

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}
