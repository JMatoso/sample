
window.addEventListener('load', () => {
    const loader = $('#loader')

    setTimeout(() => {
        loader.addClass('fadeOut')
    }, 300)

    feather.replace()

    $('#copy').text(new Date().getFullYear())

    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            autoplay:true,
            nav:true,
            lazyLoad:true,
            items: 3,
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

    $('body').scrollspy({ target: '.navbar' })
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