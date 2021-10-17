const   tabsJournal = document.querySelectorAll('.journal__item'),
        screensJournal = document.querySelectorAll('.journal__tab');

for(let i = 0; i < tabsJournal.length; i++){
    tabsJournal[i].addEventListener('click', ()=> { 
        for(let x = 0; x < tabsJournal.length; x++){
            tabsJournal[x].classList.remove('journal__item-active')
            screensJournal[x].classList.remove('journal__tab-active')
        }
        tabsJournal[i].classList.add('journal__item-active')
        screensJournal[i].classList.add('journal__tab-active')  
    })
}

const   tabsReview = document.querySelectorAll('.review__item'),
        screensReview = document.querySelectorAll('.review__tab');

for(let i = 0; i < tabsReview.length; i++){
    tabsReview[i].addEventListener('click', ()=> { 
        for(let x = 0; x < tabsReview.length; x++){
            tabsReview[x].classList.remove('review__item-active')
            screensReview[x].classList.remove('review__tab-active')
        }
        tabsReview[i].classList.add('review__item-active')
        screensReview[i].classList.add('review__tab-active')  
    })
}

