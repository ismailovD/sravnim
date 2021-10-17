const swiper = new Swiper('.main-swiper', {
    loop: true,
    autoplay: {
        delay: 5000 
    },navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    } 
      
})
const swiperPopular = new Swiper('.popular__swiper', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }  
})
const swiperOffer = new Swiper('.offer__swiper', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }  
})
const swiperSeason = new Swiper('.season__swiper', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }  
})
const swiperJournal = new Swiper('.journal__swiper', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }  
})
const swiperReview = new Swiper('.review__swiper', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }  
})
const swiperBrands = new Swiper('.brands__swiper', { 
    slidesPerView: 1, 
    grid: {
        rows:2
    },  
    watchSlidesVisibility: true,
    watchSlidesProgress: true, 
    spaceBetween:30,
    updateOnWindowResize:true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        350: {
            slidesPerView:2, 
        } ,
        576: {
           slidesPerView: 3, 
         },
         768: {
           slidesPerView: 4, 
         },
         992: {
           slidesPerView: 5,
           spaceBetween: 15,
         },
         1140: {
           slidesPerView: 6,
           spaceBetween: 30,
         },
       }
})

const swiperHistory = new Swiper('.history__swiper', { 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }  
}) 
 