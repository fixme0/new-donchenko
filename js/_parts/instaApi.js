(function($) {
    var tok = '3707999646.b053add.81b32ed685d14350b794e31b4b35c73c',
    userid = 3707999646, 
    col = 5;
 
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: tok, count: col}, // передаем параметры, которые мы указывали выше
        success: function(result){
            var data = result.data,
                instaView = $('.insta-view');
           
            data.map(function(elem) {
                 console.log(elem);
                instaView.append(`
                <a href="${elem.link}" target="_blanc" class="insta-view__item">
                    <li style="background:url('${elem.images.standard_resolution.url}'); background-repeat: no-repeat; background-size: cover; background-position: top center;">
                    </li>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <span class="insta-view__item-name">Анна Донченко, Киев</span>
                </a>
                                `);
            });
        }
    });
}(jQuery));