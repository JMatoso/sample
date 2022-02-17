
window.addEventListener('load', () => {
    const loader = $('#loader')
    setTimeout(() => {
        loader.addClass('fadeOut')
    }, 300)

    $('#copy').text(new Date().getFullYear())
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