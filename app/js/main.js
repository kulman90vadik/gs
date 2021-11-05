$(function(){

//  start sliders
    $('.page__slider, .project__list').slick({
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
//  finish sliders

//  start modal ///////////////////////////////
    let completionLink = document.querySelector('.completion__link');
    let modal = document.querySelector('.modal');
    let modalLink = document.querySelector('.modal__link');
    let completionInputs = document.querySelectorAll('.completion__input');

    completionInputs.forEach(elem => {
        elem.addEventListener('input', function(){
            if(!(elem.value === '')) {
                elem.style.backgroundColor = '#87f8a0';
            } 
        });
    });

    completionLink.addEventListener('click', function(e) {
        e.preventDefault();
        let count = 0;
        completionInputs.forEach(elem => {
            if(elem.value === '') {
                elem.style.backgroundColor = '#f85252';
                count++;
            } 
        });

        if(count === 0) {
            modal.classList.add('modal--active');
        }
    });

    modalLink.addEventListener('click', function() {
        modal.classList.remove('modal--active');
        completionInputs.forEach(elem => {
            elem.value = '';
            elem.style.backgroundColor = '#fff';
        });
    });
//  finish modal ////////////////////////////////
    
//  start header-scroll
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
//  finish header-scroll

//  start menu
let menuLinks = document.querySelectorAll('.menu__dropdown-link');
let menuImages = document.querySelector('.menu__photo');

for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('mousemove', function(){
        let menuLinksItem = menuLinks[i].getAttribute('data');
        menuImages.setAttribute('src', menuLinksItem);
    });
}
//  finish menu

//  start tabs
let tabButtons = document.querySelectorAll('.particular-tabs__btn');
let tabContent = document.querySelectorAll('.particular-tabs__content');
for(let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function(e){
        let activeTabAttr = e.target.getAttribute('data-tab');
        for (let j = 0; j < tabButtons.length; j++) {
            let contentAttr = tabContent[j].getAttribute('data-content');
            if (activeTabAttr === contentAttr) {
                tabButtons[j].classList.add('particular-tabs__btn--active');
                tabContent[j].classList.add('particular-tabs__content--active'); 
            } else {
                tabButtons[j].classList.remove('particular-tabs__btn--active');
                tabContent[j].classList.remove('particular-tabs__content--active');
            }
        };
    });
}
//  finish tabs

//  start add review
let reviewAdd = document.querySelector('.review__add');
reviewAdd.addEventListener('click', function(){
    let reviewItems = document.querySelectorAll('.review__item--hidden');
    reviewItems.forEach(elem => {
        elem.classList.add('review__item--show');
    });
    this.classList.add('review__add--remove')
});
//  finish review

//  start add cards category
    // let categoryLinkAll = document.querySelector('.category__link-all');
    // categoryLinkAll.addEventListener('click', function(e){
    //     e.preventDefault();
    //     let categoryItemsHidden = document.querySelectorAll('.category__item--hidden');
    //     categoryItemsHidden.forEach(elem => {
    //         elem.classList.add('category__item--show');
    //     });
    //     this.classList.add('category__link--remove')
    // });
//  finish add cards category__item


// оставить отзыв о товаре///////////////////////////////
const rewiesItem = {
    starNumber: 0,
    name: '',
    email: '',
    text: ''
}

document.querySelector('.review__submit').addEventListener('click', function(e){
    e.preventDefault();
    let inputName = document.querySelector('.review__input--name').value;
    let inputEmail = document.querySelector('.review__input--email').value;
    let inputTextarea = document.querySelector('.review__textarea').value;
    if(inputName === '' || inputEmail === '' || inputTextarea === '') {
        // console.log('nein');
        return false;
    }
    else {
        rewiesItem.name = inputName;
        rewiesItem.email = inputEmail;
        rewiesItem.text = inputTextarea;
    }
    let reviewList = document.querySelector('.review__list');
    let reviewListItem = `
    <li class="review__item">
        <div class="review__heading">
            <span class="review__author">${rewiesItem.name}</span>
            <time class="review__time" datetime="20-06-2021">20 августа, 2021</time>
            <div class="stars" data-rateyo-rating="${rewiesItem.starNumber}"></div>
        </div>
        <div class="review__content">
            <p class="review__text">${rewiesItem.text}</p>
            <div class="review__buttons">
                <button class="review__btn" type="button">
                    <svg class="review__icon-arrow-rewies">
                        <use xlink:href="images/sprite.svg#arrow-rewies"></use>
                    </svg>
                    <div class="review__descr">Ответить</div>
                </button>
                <button class="review__btn" type="button">
                    <svg class="review__icon-description">
                        <use xlink:href="images/sprite.svg#description"></use>
                    </svg>
                    <div class="review__descr">
                        <span>1</span>
                        комментарий
                    </div>
                </button>
            </div>
        </div>    
    </li>`;
    reviewList.innerHTML += reviewListItem;

    document.querySelector('.review__input--name').value = '';
    document.querySelector('.review__input--email').value = '';
    document.querySelector('.review__textarea').value = '';
});

// // start star
let reviewScore = document.querySelectorAll('.review__score');
reviewScore.forEach(function(item, index){

    item.addEventListener('click', function(){
        rewiesItem.starNumber = Number(index) + 1;
        console.log(rewiesItem.starNumber);
        for(let i = 0; i < reviewScore.length; i++) {
            reviewScore[i].classList.remove('review__icon-star--active');
        }
        for(let i = 0; i <= index; i++) {
            reviewScore[i].classList.add('review__icon-star--active');
        }
    });
});
// finish star
// finish оставить отзыв о товаре ///////////////////////////////






// start accordion
// ДОДЕЛАТЬ!!!
// let particularHeads = document.querySelectorAll('.particular__head');
// const particularInfo = document.querySelector('.particular__info--active');
// particularInfo.style.maxHeight = particularInfo.scrollHeight + 'px';
//     particularHeads.forEach(item => {
//         item.addEventListener('click', function(){
//             item.classList.toggle('particular__head--active');
//             let accordionIcon = item.querySelector('.particular__accordion-icon');
//             accordionIcon.classList.toggle('particular__accordion-icon--active');
//             let nextItem = item.nextElementSibling;

//             if(nextItem.style.maxHeight) {
//                 nextItem.style.maxHeight = null;
//                 nextItem.style.backgroundColor = '#fff';
//             }
//             else {
//                 nextItem.style.maxHeight = nextItem.scrollHeight + 'px';
//                 nextItem.style.backgroundColor = '#F6F7F9';
//             }
//         });
//     });
// finish accordion

//  start select product
    // let particularBtn = document.querySelector('.particular__btn');
    // let particularList = document.querySelector('.particular__list');
    // particularBtn.addEventListener('click', function(){
    //     console.log(particularList);
    //     particularList.classList.toggle('particular__list--active');
    //     document.querySelector('.particular__icon').classList.toggle('particular__icon--active');
    // });

    // let particularItems = document.querySelectorAll('.particular__item');
    // particularItems.forEach(elem => {
    //     elem.addEventListener('click', function(event){
    //         particularList.classList.toggle('particular__list--active');
    //         document.querySelector('.particular__icon').classList.toggle('particular__icon--active');
    //         particularBtn.value = elem.getAttribute('data-val');
    //         document.querySelector('.particular__text').textContent = elem.textContent;
    //     });
    // });
//  finish select product

//  start particular sliders
    // let particularImagesSmall = document.querySelectorAll('.particular__images-small');
    // let particularImagesBig = document.querySelector('.particular__images-big');
    // particularImagesSmall.forEach(elem => {
    //     elem.addEventListener('click', function(){
    //         let imagesSmallAttribute = elem.getAttribute('src');
    //         particularImagesBig.setAttribute('src', imagesSmallAttribute);
    //     });
    // });
//  finish particular sliders

//  start range 
// $('.sidebar-filter__range').ionRangeSlider({
//     onStart: function (data) {
//         $('.sidebar-filter__min-number').text(data.from);
//         $('.sidebar-filter__max-number').text(data.to);
//     },
//     onChange: function (data) {
//         $('.sidebar-filter__min-number').text(data.from);
//         $('.sidebar-filter__max-number').text(data.to);
//     }
// });
//  finish range 



//  start star
    $('.stars').rateYo({
        starWidth: '18px',
        normalFill: '#A0A0A0',
        ratedFill: '#F6AB3A',
        spacing: '8px',
        readOnly: true
    });
//  finish star

//  start filter
    // let sidebarFilterRadio = document.querySelectorAll('[data-radio]');
    // sidebarFilterRadio.forEach(elem => {
    //     elem.addEventListener('click', function(){
    //         let sidebarFilter = elem.closest('.sidebar-filter__label');
    //         let sidebarFilterChildern = sidebarFilter.querySelector('.sidebar-filter__text').innerHTML;
    //         document.querySelector('.registry__description').innerHTML = sidebarFilterChildern;
    //     });
    // });
//  finish filter



//  start filter-select
    // let sidebarHeading = document.querySelectorAll('.sidebar-filter__heading');
    // sidebarHeading.forEach(elem => {
    //     elem.addEventListener('click', function(){
    //         elem.classList.toggle('sidebar-filter__heading--active');
    //         elem.querySelector('.sidebar-filter__icon').classList.toggle('sidebar-filter__icon--active');
    //         let sidebarFilter = elem.closest('.sidebar-filter');
    //         let sidebarHolder = sidebarFilter.querySelector('.sidebar-filter__holder');
    //         sidebarHolder.classList.toggle('sidebar-filter__holder--active');
    //         sidebarFilter.classList.toggle('sidebar-filter--active');
    //     });
    // });
//  finish filter-select

//  start select 
    // let registryBtn = document.querySelector('.registry__btn');
    // let registryOptions = document.querySelector('.registry__options');
    // registryBtn.addEventListener('click', function(){
    //     registryOptions.classList.toggle('registry__options--active');
    //     document.querySelector('.registry__icon').classList.toggle('registry__icon--active');
    // });

    // let registryOptionsItems = document.querySelectorAll('.registry__option');
    // registryOptionsItems.forEach(elem => {
    //     elem.addEventListener('click', function(){
    //         registryOptions.classList.toggle('registry__options--active');
    //         document.querySelector('.registry__icon').classList.toggle('registry__icon--active');
    //         registryBtn.value = elem.getAttribute('data-value');
    //         document.querySelector('.registry__text').textContent = elem.textContent;
    //     });
    // });
//  finish select





});

    // import Swiper, { Navigation, Pagination } from 'swiper';
    // Swiper.use([Navigation, Pagination]);
    // let swiperHome = new Swiper('.swiper', {
        // slideClass: 'page__item',
        // loop: true,
        // wrapperClass: 'page__slider',
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
    // });