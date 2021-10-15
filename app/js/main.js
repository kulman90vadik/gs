$(function(){
    // start menu
    let menuLinks = document.querySelectorAll('.menu__dropdown-link');
    let menuImages = document.querySelector('.menu__photo');

    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('mousemove', function(){
            let menuLinksItem = menuLinks[i].getAttribute('data');
            menuImages.setAttribute('src', menuLinksItem);
        });
    }
    // finish menu

    $('.page__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'
    });

    $('.products__list').slick({
        nextArrow: $('.products__next'),
        prevArrow: $('.products__prev'),
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
    });
});