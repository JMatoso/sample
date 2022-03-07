'use strict'

window.addEventListener('load', () => {
    
    owl()
    loader()
    progress()

    feather.replace()

    new WOW({ 
        boxClass: 'wow', 
        mobile: false, 
    }).init()

    $('.counter').counterUp(
        { 
            delay: 10, 
            time: 1600 
        }
    )

    $('body').scrollspy(
        { 
            target: '.navbar', 
            offset:0 
        }
    )    

    $('#copy').text(new Date().getFullYear())
})

function progress()
{
    if ($('.progress-bar').length) { 
        $('.progress-bar').appear(function () 
        { 
            var el = $(this); 
            var percent = el.data('width'); 
            $(el).css('width', percent + '%'); 
        }, { accY: 0 }); 
    }
}

function owl()
{
    $(".owl-portfolio").owlCarousel(
        {
            loop:true,
            margin:10,
            autoplay:true,
            autoplayHoverPause:true,
            nav:true,
            lazyLoad:true,
            items:3,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:3,
                    nav:true
                }
            }
        }
    );

    $(".owl-clients").owlCarousel(
        {
            loop:true,
            margin:10,
            autoplay:true,
            autoplayHoverPause:true,
            nav:true,
            lazyLoad:true,
            items:5,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:5,
                    nav:true
                }
            }
        }
    );

    $(".owl-testimonials").owlCarousel(
        {
            items:2,
            margin:30,
            responsiveClass:true,
            nav:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:2,
                    nav:true
                }
            }
        }
    );
}

function loader()
{
    const loader = $('#loader')

    setTimeout(() => {
        loader.addClass('fadeOut')
    }, 300)
}

$(window).bind('scroll', () => 
{
    const navbar = $('.navbar')

    if($(window).scrollTop() > 20)
    {
        navbar.addClass("sticky box-shadow")
        navbar.removeClass("pt-5")

        if($(window).scrollTop() > (window.innerHeight - 60))
        {
            navbar.addClass("bg-blue-2")
        }
        else
        {
            navbar.removeClass("bg-blue-2")
        }
    }
    else
    {
        navbar.removeClass("sticky box-shadow bg-blue-2")
        navbar.addClass("pt-5")
    }

    var body = document.body,
    html = document.documentElement;

    const backTop = $('.back-top')

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    if($(window).scrollTop() >= (height / 2))
    {
        backTop.removeClass('d-none')
    }
    else
    {
        backTop.addClass('d-none')
    }
})