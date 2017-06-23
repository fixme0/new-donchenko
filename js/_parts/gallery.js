$(document).ready(function() {
    var _thatGallery;
    
    class Gallery {
        constructor(currentElem, parentBlock) {
            this.currentElem = currentElem;
            this.parentBlock = parentBlock;
        }
        showGallery() {
            $('body, html').css('overflow', 'hidden');
            $('.gallery-show').fadeIn(300);
            this.bindEvents();
            this.showPhoto(); 
        }
        showPhoto() {
            var srcPhoto = this.currentElem.data('gallery-img');
            _thatGallery.clearGallery();
            setTimeout(()=> {
                $('.gallery-show')
                .append(`<img class="gallery-show__img" alt="photo" src="img/${srcPhoto}">`)
                .find('img')
                .click((event) => {
                    event.stopPropagation();
                });
            }, 300);
            
            setTimeout(()=> {
                $('.gallery-show').find('img').addClass('showImage');
            }, 400);
        }
        clearGallery() {
            $('.gallery-show').find('img').removeClass('showImage');
            setTimeout(()=> {
                $('.gallery-show').find('img').remove();
            }, 290);
        }
        closeGallery() {
            _thatGallery.clearGallery();
            $('.gallery-show').fadeOut(300, function() {
                $('body, html').css('overflow', 'auto');
            });
            $('.gallery-show, .gallery-show .fa-times, .gallery-show-arrows .fa-arrow-left, .gallery-show-arrows .fa-arrow-right').unbind('click');
        }
        listingPhoto(event) {
            event.stopPropagation();
            if($(this).is('.fa-arrow-left')) {
                if(_thatGallery.currentElem.prev().length) {
                   _thatGallery.currentElem = _thatGallery.currentElem.prev();
                }else {
                    _thatGallery.currentElem = _thatGallery.parentBlock.find('li').last();
                }
            }else if($(this).is('.fa-arrow-right')) {
                if(_thatGallery.currentElem.next().length) {
                   _thatGallery.currentElem = _thatGallery.currentElem.next();
                }else {
                    _thatGallery.currentElem = _thatGallery.parentBlock.find('li').first();
                }
            }
            
            _thatGallery.showPhoto();
        }
        bindEvents() {
            $('.gallery-show, .gallery-show .fa-times').bind('click', this.closeGallery);
            $('.gallery-show-arrows .fa-arrow-left, .gallery-show-arrows .fa-arrow-right').bind('click', this.listingPhoto);
            _thatGallery = this;
        }
    }
    
    $('.portfolio-foto-list-item').click(function() {
        var initGallery = new Gallery($(this), $(this).closest('.portfolio-foto-list'));

        initGallery.showGallery();
    });
});