$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();

        $(".mo-modal-overlay").fadeIn(500)
        $(".mo-modal").addClass("mo-modal-in");
    });
});
$(document).ready(function () {
    ///////// **modal** /////////
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    //////////** header-message **//////////
    $(".header-message span.close-msg").click(function () {
        $(".header-message").slideUp()
    });
    //////////** lang-curr **//////////
    if ($(window).width() <= 991) {
        $(".top-setting").click(function () {
            $(this).toggleClass("active")
        });
    }
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    //////////** cats slider **//////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cats-slider .swiper-button-next',
            prevEl: '.cats-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 42,
            },
        },
    });
    //////////** search **//////////
    $('.search-icon').click(function () {
        $(".search-cont").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-form").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-cont').click(function () {
        $("body").removeClass("overflow");
        $(".search-cont").fadeOut(500);
        $(".search-form").removeClass("search-in");
        $('.search-input').focusout();
    });
    $('.search-form').click(function (e) {
        e.stopPropagation();
    });
    //////////** menu **//////////
    $('.menu-ico').click(function () {
        $("nav").fadeIn(300);
        $(".mo-navbar").addClass("nav-in");
        $("body").addClass("overflow");
    });

    $('nav').click(function () {
        $("nav").fadeOut(400);
        $(".mo-navbar").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.mo-navbar').click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $("nav").fadeOut(400);
        $(".mo-navbar").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".foot-nav").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
});