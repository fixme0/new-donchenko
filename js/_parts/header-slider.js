$(document).ready(function() {
    $('.header-slider').slick({
        dots: true,
        arrows: false,
        slide: ('.header-slider-item'),
        appendDots: ('.header-slider-dots'),
//        autoplay:true,
        autoplaySpeed: 4000,
        pauseOnHover:false
    });
    
    var slidersArr = [
        $('.header-slider-item--first .header-slider-item__info'),
        $('.header-slider-item--second .header-slider-item__info'),
        $('.header-slider-item--third .header-slider-item__info'),
        $('.header-slider-item--fourth .header-slider-item__info')
    ];
    
    $('.header-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var swipeSlide = slidersArr[nextSlide];
        
        $('.header-slider-item__info').removeClass('animated');
        $('.header-slider-item__info-btn').removeClass('my-custom-slideInUp');
        
        swipeSlide
            .addClass('animated')
            .find('.header-slider-item__info-btn')
            .addClass('my-custom-slideInUp');
    });
});