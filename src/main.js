document.addEventListener('DOMContentLoaded', ()=>{
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', ()=>{
        currentPos = window.scrollY

        if(currentPos < heroHeight){
            hiddingHeader()
        } else {
            showHeaderEl()
        }
    })

    //shows, tabs functionalities
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (btn)=>{
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveBtn();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }
    //faq section, accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', showOrHideQuestion);[]
    }
})

function hiddingHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}
function showHeaderEl(){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function showOrHideQuestion(element){
    const classe = 'faq__questions__item--is-open';
    const daddyElement = element.target.parentNode;

    daddyElement.classList.toggle(classe)
}

function removeActiveBtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i <  buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs(){
    const sectionTab = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < sectionTab.length; i++){
        sectionTab[i].classList.remove('shows__list--is-active');
    }
}


