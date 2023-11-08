document.addEventListener('DOMContentLoaded', ()=>{
    const buttons = document.querySelectorAll('[data-tab-button]');

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
})

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