/**
 * Created by Dreamer on 4/18/2017.
 */
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse")
        .addClass("nav-collapse");

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse")
           .removeClass("nav-collapse");

    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});