const casesSwiper = new Swiper('.cases-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        1024: {
            spaceBetween: 90,
        }
    },

    navigation: {
        nextEl: '.case-next',
        prevEl: '.case-prev',
    }
});