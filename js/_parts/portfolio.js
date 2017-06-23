$(document).ready(function() {
    var heightList = $('.portfolio-foto-list').height(),
        viewPortPortfolio = $('.portfolio-foto-wrapper-view'),
        allLinkPortfolio = $('.portfolio-menu-list-item__link');
        
    $('.portfolio-foto-wrapper').height(heightList);
    
    $('.portfolio-menu-list-item__link').on('click', function(event) {
        event.preventDefault();
        
        var indexHeight = $(this).data('index-height'),
            currentActiveElem = allLinkPortfolio.filter((index, elem) => {
                                    if($(elem).is('.active')){
                                        return elem;
                                    }
                                })[0];
        
        $(currentActiveElem).removeClass('active');
        $(this).addClass('active');
        viewPortPortfolio.css('transform', `translateY(-${heightList*indexHeight+0.5}px)`);
    });
});