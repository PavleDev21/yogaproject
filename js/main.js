var $toggle = $('.nav-toggle');
var $menu = $('.navigation');
var $navItem = $('.nav-link');
var activeClass = 'nav-toggle-active';
$toggle.on('click', function() {
        if($toggle.hasClass(activeClass)) {
            $toggle.removeClass(activeClass);
            $menu.stop().slideUp();
        } 
        else {
            $toggle.addClass(activeClass);
            $menu.stop().slideDown();
    }
    $navItem.on('click', function() {
        var $this = $(this);
        $toggle.removeClass(activeClass);
        $menu.stop().slideUp();
    });
});
$(".up").click(function() {
    $('html,body').animate({
        scrollTop: $(".body").offset().top},
        2000);
});
$("#home").click(function() {
    $('html,body').animate({
        scrollTop: $(".body").offset().top},
        2000);
});
$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".class").offset().top},
        2000);
});
$("#services").click(function() {
    $('html,body').animate({
        scrollTop: $(".pricing").offset().top},
        2000);
});
var newWindowWidth = $(window).width();
if (newWindowWidth < 767) {
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".footer").offset().top-100},
            2000);
    });
    }
    else {
        $("#contact").click(function() {
            $('html,body').animate({
                scrollTop: $(".footer").offset().top},
                2000);
        });
    }
