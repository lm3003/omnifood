$(document).ready(function(){

    //Sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    // Scroll

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.section-signup').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000);
    });

    //Navigation scroll

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*animations on scroll*/
    $('.js--wp1').waypoint(function (direction) {
        $('.js--wp1').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });

    /*animations on scroll*/
    $('.js--wp2').waypoint(function (direction) {
        $('.js--wp2').addClass('animated fadeInUp');

    }, {
        offset: '50%'
    });

    /*animations on scroll*/
    $('.js--wp3').waypoint(function (direction) {
        $('.js--wp3').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });

    /*animations on scroll*/
    $('.js--wp4').waypoint(function (direction) {
        $('.js--wp4').addClass('animated pulse');

    }, {
        offset: '50%'
    });

    // mobile navigation

    $('.mobile-navigation-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.mobile-navigation-icon i');
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

});