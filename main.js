$(function(){

    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 6000
    });

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});
$('.footer__btn-menu').on('click', function(){
    $('.footer__inner a').slideToggle();
});

});