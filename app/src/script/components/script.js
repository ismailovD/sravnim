window.addEventListener('resize', ()=> {
    location.reload()
})


const productStar = document.querySelectorAll('.review__stars');

productStar.forEach(e => {
    let starCount = e.getAttribute('data-star');
    for(let i = 0; i < starCount; i++){
        e.children[i].style.fill = '#FFD600'
    }
})

const   btnBurger = document.querySelector('.bottom-nav__dropdown-menu'),
        burgerMenu = document.querySelector('.bottom-nav__list ');

btnBurger.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('bottom-nav__list-active')
    btnBurger.classList.toggle('active')
})

const   searchInp = document.querySelector('.center-nav__input'),
        searchTable = document.querySelector('.center-nav__table');

searchInp.addEventListener('input', ()=> {
    if(searchInp.value.length > 0){
        searchTable.classList.add('center-nav__table-active')
        searchInp.classList.add('center-nav__input-active') 
    }else {
        searchTable.classList.remove('center-nav__table-active')
        searchInp.classList.remove('center-nav__input-active')
    }
})

searchInp.addEventListener('change', ()=> {
    searchTable.classList.remove('center-nav__table-active')
    searchInp.classList.remove('center-nav__input-active')
})