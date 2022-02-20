
window.addEventListener('load', () => {
    const loader = $('#loader')

    setTimeout(() => {
        loader.addClass('fadeOut')
    }, 300)

    feather.replace()

    $('#copy').text(new Date().getFullYear())

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

    $('body').scrollspy({ target: '.navbar' })

    $('.counter').counterUp({ 
        delay: 10, 
        time: 1600 
    }); 

    if ($('.progress-bar').length) { 
        $('.progress-bar').appear(function () 
        { 
            var el = $(this); 
            var percent = el.data('width'); 
            $(el).css('width', percent + '%'); 
        }, { accY: 0 }); 
    }

    var wow = new WOW({ boxClass: 'wow', mobile: false, })
    wow.init();
})

$(window).bind('scroll', () => {
    const navbar = $('.navbar')

    if($(window).scrollTop() > 20){
        navbar.addClass("sticky box-shadow")
        navbar.removeClass("pt-5")
    }else{
        navbar.removeClass("sticky box-shadow")
        navbar.addClass("pt-5")
    }
})