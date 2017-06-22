$(document).ready(function() {
    var menu = $('.top-nav');
    
    $(window).on('scroll load', function() {
        if($(this).scrollTop()){
            menu.addClass('menu-fixed');
        }else {
            menu.removeClass('menu-fixed');
        } 
    });
});