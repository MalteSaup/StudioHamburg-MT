$(document).ready(function () {
    var scrollTop = 0;
    
    $('body').scrollspy({
        target: ".navbar"
        , offset: 50
    });
    
    $("#navbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);
        if (scrollTop >= 100) {
            $('#navbar').addClass('scrolled-nav');
        }
        else if (scrollTop < 100) {
            $('#navbar').removeClass('scrolled-nav');
        }
    });
});