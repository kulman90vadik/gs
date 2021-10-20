$(function(){

    // select 
    let registryBtn = document.querySelector('.registry__btn');
    let registryOptions = document.querySelector('.registry__options');
    registryBtn.addEventListener('click', function(){
        registryOptions.classList.toggle('registry__options--active');
        document.querySelector('.registry__icon').classList.toggle('registry__icon--active');
    });

    let registryOptionsItems = document.querySelectorAll('.registry__option');
    registryOptionsItems.forEach(elem => {
        elem.addEventListener('click', function(){
            registryOptions.classList.toggle('registry__options--active');
            document.querySelector('.registry__icon').classList.toggle('registry__icon--active');
            registryBtn.value = elem.getAttribute('data-value');
            document.querySelector('.registry__text').textContent = elem.textContent;
        });
    });
    // finish select



    let sidebarHeading = document.querySelectorAll('.sidebar-filter__heading');
    sidebarHeading.forEach(elem => {
        elem.addEventListener('click', function(){
            elem.classList.toggle('sidebar-filter__heading--active');
            elem.querySelector('.sidebar-filter__icon').classList.toggle('sidebar-filter__icon--active');
            let sidebarFilter = elem.closest('.sidebar-filter');
            let sidebarHolder = sidebarFilter.querySelector('.sidebar-filter__holder');
            sidebarHolder.classList.toggle('sidebar-filter__holder--active');
            sidebarFilter.classList.toggle('sidebar-filter--active');
        });
    });


    $('.sidebar-filter__range').ionRangeSlider({
        onStart: function (data) {
            $('.sidebar-filter__min-number').text(data.from);
            $('.sidebar-filter__max-number').text(data.to);
        },
        onChange: function (data) {
            $('.sidebar-filter__min-number').text(data.from);
            $('.sidebar-filter__max-number').text(data.to);
        }
    });


    let header = document.querySelector('.header');
    let headerTop = document.querySelector('.header__top');
    let main = document.querySelector('.main');

    window.addEventListener('scroll', function(){
        if(window.scrollY >= 116) {
            headerTop.classList.add('header__top--hidden');
            header.classList.add('header--active');
            main.style.paddingTop = `${116}px`;
        } else {
            headerTop.classList.remove('header__top--hidden');
            header.classList.remove('header--active');
            main.style.paddingTop = 0;
        }
    });

//     // start menu
    let menuLinks = document.querySelectorAll('.menu__dropdown-link');
    let menuImages = document.querySelector('.menu__photo');

    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('mousemove', function(){
            let menuLinksItem = menuLinks[i].getAttribute('data');
            menuImages.setAttribute('src', menuLinksItem);
        });
    }
//     // finish menu

//     // sliders

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

//     // add cards category

    let categoryLinkAll = document.querySelector('.category__link-all');
    categoryLinkAll.addEventListener('click', function(e){
        e.preventDefault();
        let categoryItemsHidden = document.querySelectorAll('.category__item--hidden');
        categoryItemsHidden.forEach(elem => {
            elem.classList.add('category__item--show');
        });
        this.classList.add('category__link--remove')
    });

    // 

  



});

